#!/usr/bin/env python3
"""
Translation Validation Script
Validates that all translation keys are present in all languages
Ensures no missing or extra translations
Counts product translation progress
"""

import re
import sys

def extract_keys_from_section(content, lang_section):
    """Extract all translation keys from a specific language section"""
    # Find the language section
    pattern = rf'{lang_section}:\s*\{{([^}}]+(?:\}}(?!\s*,\s*\w+:)[^}}]*)*)\}}'
    match = re.search(pattern, content, re.DOTALL)

    if not match:
        print(f"❌ Could not find {lang_section} section")
        return set()

    section_content = match.group(1)

    # Extract all keys (format: "key": "value")
    key_pattern = r'"([^"]+)":\s*"'
    keys = set(re.findall(key_pattern, section_content))

    return keys

def count_product_keys(keys):
    """Count how many product translation keys exist"""
    return len([k for k in keys if k.startswith('prod.')])

def get_product_range(keys):
    """Get the range of product IDs"""
    prod_keys = [k for k in keys if k.startswith('prod.')]
    if not prod_keys:
        return None, None

    # Extract numbers
    numbers = sorted([int(k.split('.')[1]) for k in prod_keys])
    return numbers[0], numbers[-1]

def validate_translations(filename='translations.js'):
    """Validate translation completeness"""

    print("=" * 60)
    print("TRANSLATION VALIDATION REPORT")
    print("=" * 60)
    print()

    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ ERROR: {filename} not found")
        print("   Make sure you're in the correct directory")
        return False

    # Define languages
    languages = {
        'en': 'English',
        'ru': 'Russian',
        'uz': 'Uzbek',
        'fa': 'Farsi',
        'tg': 'Tajik'
    }

    # Extract keys for each language
    all_keys = {}
    for lang_code, lang_name in languages.items():
        keys = extract_keys_from_section(content, lang_code)
        all_keys[lang_code] = keys

        product_count = count_product_keys(keys)
        min_prod, max_prod = get_product_range(keys)

        print(f"📊 {lang_name} ({lang_code}):")
        print(f"   Total keys: {len(keys)}")
        print(f"   Product keys: {product_count}")
        if min_prod is not None:
            print(f"   Product range: prod.{min_prod:04d} to prod.{max_prod:04d}")
        print()

    # Get total unique products
    all_prod_keys = set()
    for keys in all_keys.values():
        all_prod_keys.update([k for k in keys if k.startswith('prod.')])

    if all_prod_keys:
        min_prod, max_prod = get_product_range(all_prod_keys)
        print(f"📊 Total unique products: {len(all_prod_keys)}")
        if min_prod is not None:
            print(f"   Range: prod.{min_prod:04d} to prod.{max_prod:04d}")
        print()
    else:
        print(f"📊 Total unique products: 0")
        print()

    # Check consistency
    print("=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print()

    # Get English keys as reference
    en_keys = all_keys['en']
    all_valid = True

    # Check each language against English
    for lang_code, lang_name in languages.items():
        if lang_code == 'en':
            continue

        lang_keys = all_keys[lang_code]

        # Find missing and extra keys
        missing_keys = en_keys - lang_keys
        extra_keys = lang_keys - en_keys

        if missing_keys:
            all_valid = False
            print(f"❌ {lang_name} MISSING {len(missing_keys)} keys:")
            for key in sorted(list(missing_keys))[:10]:  # Show first 10
                print(f"   - {key}")
            if len(missing_keys) > 10:
                print(f"   ... and {len(missing_keys) - 10} more")
            print()

        if extra_keys:
            all_valid = False
            print(f"❌ {lang_name} has {len(extra_keys)} EXTRA keys:")
            for key in sorted(list(extra_keys))[:10]:  # Show first 10
                print(f"   - {key}")
            if len(extra_keys) > 10:
                print(f"   ... and {len(extra_keys) - 10} more")
            print()

    # Check if all languages have same number of keys
    key_counts = [len(keys) for keys in all_keys.values()]
    if len(set(key_counts)) == 1:
        print(f"✅ ALL LANGUAGES VALIDATED")
        print(f"   - All {len(languages)} languages have {key_counts[0]} keys")
        print(f"   - No missing or extra keys")
        print(f"   - {len(all_prod_keys)} products translated")
        print()
    else:
        all_valid = False
        print(f"❌ KEY COUNT MISMATCH:")
        for lang_code, lang_name in languages.items():
            print(f"   - {lang_name}: {len(all_keys[lang_code])} keys")
        print()

    # Final status
    if all_valid:
        print("=" * 60)
        print("✅ VALIDATION PASSED - Ready to commit!")
        print("=" * 60)
        return True
    else:
        print("=" * 60)
        print("❌ VALIDATION FAILED")
        print("   - Fix missing/extra keys before committing")
        print("=" * 60)
        return False

if __name__ == "__main__":
    success = validate_translations()
    sys.exit(0 if success else 1)
