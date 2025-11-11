# Continuation Guide for Product Translations

## Current Status

**Date**: 2025-11-11
**Branch**: `claude/fix-translation-coverage-011CV1DK9J9VaDvb7sB9hB4p`

### ✅ Completed
- Phase 1: 36 category headers translated (all 5 languages)
- Phase 2: System messages translated
- Translation standards documented
- Validation scripts created

### 🚧 In Progress
- Phase 3: Product translations (816 products × 5 languages = 4,080 translations)

### 📊 Translation Progress

Check current progress:
```bash
python3 .claude/scripts/validate_translations.py
```

---

## How to Continue Product Translations

### Step 1: Check Current Status

```bash
cd /home/user/softlaunchwebsite

# Count how many products are already translated
grep -c '"prod\.' translations.js

# Find the highest product number
grep '"prod\.' translations.js | grep -o 'prod\.[0-9]*' | sort -u | tail -1

# Expected: prod.0001 through prod.0816 (816 total)
```

### Step 2: Get List of Remaining Products

The complete product list is in: `/tmp/product_list.txt`

Format: `prod.XXXX|||PRODUCT_NAME_IN_ENGLISH`

```bash
# View product list
cat /tmp/product_list.txt | head -20

# Count total products
wc -l /tmp/product_list.txt
```

### Step 3: Translate Products in Batches

**Recommended batch size**: 50-100 products at a time

#### For Each Batch:

**A. Prepare the batch**
```bash
# Get next 50 products to translate
# Example: products 1-50
sed -n '1,50p' /tmp/product_list.txt > /tmp/batch1.txt

# Example: products 51-100
sed -n '51,100p' /tmp/product_list.txt > /tmp/batch2.txt
```

**B. Translation format (BILINGUAL)**

For EACH product, create entries in ALL 5 languages:

**English (en):**
```javascript
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE",
```

**Russian (ru) - BILINGUAL:**
```javascript
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (Сидячая ванна или оборудование, портативное, используется с туалетным стулом или без него)",
```

**Uzbek (uz) - BILINGUAL:**
```javascript
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (Sitz tipidagi vanna yoki uskunalar, ko'chma, hojatxona kursisi bilan yoki usiz)",
```

**Farsi (fa) - BILINGUAL:**
```javascript
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (حمام یا تجهیزات نشیمن، قابل حمل، با یا بدون صندلی توالت)",
```

**Tajik (tg) - BILINGUAL:**
```javascript
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (Ҳаммоми нишаст ё таҷҳизот, кӯчон, бо курсии ҳоҷатхона ё бе он)",
```

**C. Insert into translations.js**

1. Find the insertion point in EACH language section:
```bash
# English section - add after last prod entry or after "cat.r07"
grep -n '"cat.r07"' translations.js | head -1

# Russian section - add after last prod entry or after "cat.r07"
grep -n '"cat.r07"' translations.js | sed -n '2p'

# And so on for uz, fa, tg
```

2. Insert the product translations in numerical order
3. Maintain consistent formatting

**D. Validate**
```bash
python3 .claude/scripts/validate_translations.py
```

**E. Update HTML**

Add `data-i18n` attributes to product cards:

```bash
# Find products in HTML files
grep -n "class=\"product-name\"" catalog_diabetic_hospital.html
```

For each product, update from:
```html
<div class="product-name">PRODUCT NAME HERE</div>
```

To:
```html
<div class="product-name" data-i18n="prod.0001">PRODUCT NAME HERE</div>
```

**F. Test in Browser**
- Open catalog page
- Switch to Russian - should show bilingual: "ENGLISH (Русский)"
- Switch to Uzbek - should show bilingual: "ENGLISH (O'zbek)"
- etc.

**G. Commit the Batch**
```bash
git add translations.js catalog_*.html
git commit -m "Add product translations: prod.0001-0050 (batch 1 of 17)

- Added 50 bilingual product translations
- Languages: en, ru, uz, fa, tg
- Products: Medical device names with full translations
- Progress: 50/816 products complete (6%)

All translations validated for medical accuracy.
"

git push -u origin claude/fix-translation-coverage-011CV1DK9J9VaDvb7sB9hB4p
```

### Step 4: Repeat for All Batches

**Total batches needed**: ~17 batches (50 products each)

**Batch plan**:
- Batch 1: prod.0001-0050
- Batch 2: prod.0051-0100
- Batch 3: prod.0101-0150
- ...
- Batch 17: prod.0801-0816

---

## Translation Guidelines

### Medical Accuracy is Critical

**Resources**:
- Use medical dictionaries (Multitran, Stedman's)
- Verify terminology with medical professionals
- Cross-reference with similar medical equipment catalogs
- When unsure, keep medical term in English within parentheses

**Example**:
```javascript
// Good - preserves medical accuracy
"TRANSCUTANEOUS ELECTRICAL NERVE STIMULATOR (Чрескожный электрический нервный стимулятор)"

// Acceptable - keeps technical term
"TRANSCUTANEOUS ELECTRICAL NERVE STIMULATOR (TENS стимулятор, чрескожный электрический)"

// Bad - loses medical precision
"TRANSCUTANEOUS ELECTRICAL NERVE STIMULATOR (Электрическая штука для нервов)"
```

### Common Medical Terms Reference

Create reusable translations for common terms:

| English | Russian | Uzbek | Farsi | Tajik |
|---------|---------|-------|-------|-------|
| WHEELCHAIR | инвалидная коляска | nogironlar aravachasi | ویلچر | арабаи маъюбон |
| COMMODE | стул-туалет | hojatxona kursisi | صندلی توالت | курсии ҳоҷатхона |
| PUMP | помпа | pompa | پمپ | помпа |
| INFUSION | инфузия | infuziya | تزریق | инфузия |
| CATHETER | катетер | kateter | کاتتر | катетер |
| MONITOR | монитор | monitor | مانیتور | монитор |

*(Expand this glossary as you translate)*

---

## Troubleshooting

### Issue: translations.js is too large

**Solution**: This is expected. Final size will be ~800KB-1MB.
- Browsers handle this fine
- Gzip compression reduces by ~70%
- If needed, can split into separate files per language later

### Issue: Validation script shows missing keys

**Diagnosis**:
```bash
python3 .claude/scripts/validate_translations.py
```

**Solution**:
- Check which language is missing keys
- Add the missing translations
- Run validation again until all pass

### Issue: Bilingual format not displaying in browser

**Check**:
1. Translation has format: `ENGLISH (Translation)`
2. Space before opening parenthesis
3. HTML has `data-i18n="prod.XXXX"`
4. Product number matches in HTML and translations.js

### Issue: Can't find where to insert in translations.js

**Use line numbers from validation**:
```bash
grep -n '"cat.r07"' translations.js
# Shows line numbers for each language section
# Insert products after that line
```

---

## Automation Helper Script

### Generate Translation Template

```python
#!/usr/bin/env python3
# .claude/scripts/generate_template.py

import sys

def generate_template(start_num, end_num, product_file='/tmp/product_list.txt'):
    """Generate translation template for a batch of products"""

    with open(product_file, 'r') as f:
        products = [line.strip().split('|||') for line in f]

    batch = products[start_num-1:end_num]

    print("// ENGLISH (en) section:")
    for prod_id, name in batch:
        print(f'"{prod_id}": "{name}",')

    print("\n// RUSSIAN (ru) section - ADD TRANSLATION IN PARENTHESES:")
    for prod_id, name in batch:
        print(f'"{prod_id}": "{name} (TRANSLATION HERE)",')

    print("\n// UZBEK (uz) section - ADD TRANSLATION IN PARENTHESES:")
    for prod_id, name in batch:
        print(f'"{prod_id}": "{name} (TRANSLATION HERE)",')

    print("\n// FARSI (fa) section - ADD TRANSLATION IN PARENTHESES:")
    for prod_id, name in batch:
        print(f'"{prod_id}": "{name} (TRANSLATION HERE)",')

    print("\n// TAJIK (tg) section - ADD TRANSLATION IN PARENTHESES:")
    for prod_id, name in batch:
        print(f'"{prod_id}": "{name} (TRANSLATION HERE)",')

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python3 generate_template.py START_NUM END_NUM")
        print("Example: python3 generate_template.py 1 50")
        sys.exit(1)

    start = int(sys.argv[1])
    end = int(sys.argv[2])
    generate_template(start, end)
```

**Usage**:
```bash
chmod +x .claude/scripts/generate_template.py
python3 .claude/scripts/generate_template.py 1 50 > /tmp/batch1_template.txt
# Edit /tmp/batch1_template.txt to add translations
# Copy into translations.js
```

---

## Time Estimates

Based on translation experience:

- **Per product**: ~3-5 minutes (all 4 languages)
- **Per batch (50 products)**: 2.5-4 hours
- **Total (816 products)**: 40-65 hours of focused translation work

**Recommendation**: Work in batches, commit frequently

---

## Quality Checklist

Before committing each batch:

- [ ] All products in batch have 5 entries (en, ru, uz, fa, tg)
- [ ] All translations use bilingual format: `ENGLISH (Translation)`
- [ ] Medical terminology verified for accuracy
- [ ] Validation script passes
- [ ] HTML updated with data-i18n attributes
- [ ] Tested in browser (at least Russian)
- [ ] Commit message clear and descriptive

---

## Next Session Quick Start

```bash
# 1. Check what's done
python3 .claude/scripts/validate_translations.py

# 2. Find next batch to translate
grep '"prod\.' translations.js | tail -1
# Shows last product number translated

# 3. Generate template for next batch
python3 .claude/scripts/generate_template.py 51 100

# 4. Translate, insert, validate, commit!
```

---

## Contact / Questions

If you're a future Claude session:
- Read `.claude/TRANSLATION_STANDARDS.md` first
- Run validation script to see current status
- Follow this guide for continuation
- Commit frequently (every 50-100 products)
- Maintain bilingual format strictly

---

**Last Updated**: 2025-11-11
**Current Progress**: Phases 1 & 2 complete, Phase 3 (products) in progress
**Branch**: `claude/fix-translation-coverage-011CV1DK9J9VaDvb7sB9hB4p`
