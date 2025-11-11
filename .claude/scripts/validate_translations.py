#!/usr/bin/env python3
"""
Translation Validation Script
Validates that all translation keys are present in all languages
"""

import re
import sys

def validate_translations(filename='translations.js'):
    """Validate translation completeness"""

    print("="*60)
    print("TRANSLATION VALIDATION REPORT")
    print("="*60)

    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ Error: {filename} not found")
        return False

    languages = ['en', 'ru', 'uz', 'fa', 'tg']
    lang_keys = {}

    # Extract keys for each language
    for lang in languages:
        pattern = rf'{lang}:\s*{{([^}}]+(?:{{[^}}]*}}[^}}]*)*)}}'
        match = re.search(pattern, content, re.DOTALL)

        if match:
            lang_section = match.group(1)
            keys = set(re.findall(r'"([^"]+)":', lang_section))
            lang_keys[lang] = keys
            print(f"\n{lang.upper()}: {len(keys)} keys found")
        else:
            print(f"\n{lang.upper()}: ❌ Language section not found!")
            lang_keys[lang] = set()

    # Check consistency
    print("\n" + "="*60)
    print("CONSISTENCY CHECK")
    print("="*60)

    all_keys = lang_keys['en']  # English is the reference
    all_valid = True

    for lang in ['ru', 'uz', 'fa', 'tg']:
        missing = all_keys - lang_keys[lang]
        extra = lang_keys[lang] - all_keys

        if missing:
            print(f"\n❌ {lang.upper()}: Missing {len(missing)} keys")
            for key in sorted(list(missing))[:10]:
                print(f"   - {key}")
            if len(missing) > 10:
                print(f"   ... and {len(missing) - 10} more")
            all_valid = False

        if extra:
            print(f"\n⚠️  {lang.upper()}: {len(extra)} extra keys (not in English)")
            for key in sorted(list(extra))[:5]:
                print(f"   - {key}")
            all_valid = False

        if not missing and not extra:
            print(f"✅ {lang.upper()}: All keys present and matching")

    # Product translation progress
    print("\n" + "="*60)
    print("PRODUCT TRANSLATION PROGRESS")
    print("="*60)

    prod_keys = {k for k in all_keys if k.startswith('prod.')}
    print(f"\n📊 Total unique products: {len(prod_keys)}")

    if prod_keys:
        prod_numbers = sorted([int(k.split('.')[1]) for k in prod_keys])
        print(f"   Range: prod.{prod_numbers[0]:04d} to prod.{prod_numbers[-1]:04d}")

        # Check for gaps
        expected = set(range(1, prod_numbers[-1] + 1))
        actual = set(prod_numbers)
        gaps = expected - actual

        if gaps:
            print(f"\n⚠️  Warning: {len(gaps)} gaps in product numbering")
            gap_list = sorted(list(gaps))[:10]
            print(f"   Missing: {', '.join([f'prod.{n:04d}' for n in gap_list])}")
            if len(gaps) > 10:
                print(f"   ... and {len(gaps) - 10} more")

    # Summary
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)

    if all_valid:
        print("\n✅ ALL VALIDATIONS PASSED")
        print(f"   - All {len(languages)} languages have {len(all_keys)} keys")
        print(f"   - No missing or extra keys")
        print(f"   - {len(prod_keys)} products translated")
        return True
    else:
        print("\n❌ VALIDATION FAILED")
        print("   - Fix missing/extra keys before committing")
        return False

if __name__ == "__main__":
    success = validate_translations()
    sys.exit(0 if success else 1)
