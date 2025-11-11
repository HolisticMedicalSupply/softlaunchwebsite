# Continuation Guide for Product Translations

**How to Continue the Product Translation Work**

---

## Quick Start for Next Claude Session

### 1. Read Current Status

```bash
# Check current progress
cat .claude/STATUS_SUMMARY.md

# Run validation to see where we are
python3 .claude/scripts/validate_translations.py
```

### 2. Determine Next Batch

The product translation work is organized in batches of 50 products each:

- **Batch 1:** prod.0001-0050 (PENDING/IN PROGRESS)
- **Batch 2:** prod.0051-0100
- **Batch 3:** prod.0101-0150
- ... and so on until...
- **Batch 17:** prod.0801-0816 (final 16 products)

### 3. Get Product List

Products are extracted from HTML catalogs and stored in `/tmp/product_list.txt`:

```bash
# Extract products if not already done
python3 .claude/scripts/extract_products.py

# View a specific batch
sed -n '1,50p' /tmp/product_list.txt    # Batch 1
sed -n '51,100p' /tmp/product_list.txt  # Batch 2
```

---

## Batch Translation Workflow

### Step 1: Choose Batch Size

**Recommended:** 50 products per batch
- Large enough for efficiency
- Small enough for accuracy
- Fits well in context window

### Step 2: Add English Translations

Open `translations.js` and find the English section. Add product keys after the existing content:

```javascript
en: {
    // ... existing content ...

    "product.hcpcs_code": "HCPCS Code",

    // Products - Batch 1 (prod.0001-0050)
    "prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE",
    "prod.0002": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE, WITH FAUCET ATTACHMENT/S",
    // ... continue for all 50 products ...
    "prod.0050": "HYDROCOLLATOR UNIT, PORTABLE"
},
```

### Step 3: Add Russian Bilingual Translations

Find the Russian (`ru:`) section and add the same keys with bilingual format:

```javascript
ru: {
    // ... existing content ...

    "product.hcpcs_code": "Код HCPCS",

    // Products - Batch 1 (prod.0001-0050)
    "prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (Сидячая ванна или оборудование, портативная, используется с туалетным стулом или без него)",
    "prod.0002": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE, WITH FAUCET ATTACHMENT/S (Сидячая ванна или оборудование, портативная, с туалетным стулом или без него, с креплением для крана)",
    // ... continue ...
},
```

### Step 4: Add Uzbek Bilingual Translations

Find the Uzbek (`uz:`) section:

```javascript
uz: {
    // ... existing content ...

    "prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (Sitz tipidagi vanna yoki uskunalar, ko'chma, hojatxona kursisi bilan yoki usiz)",
    // ... continue ...
},
```

### Step 5: Add Farsi Bilingual Translations

Find the Farsi (`fa:`) section (RTL language):

```javascript
fa: {
    // ... existing content ...

    "prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (حمام یا تجهیزات نشیمن، قابل حمل، با یا بدون صندلی توالت)",
    // ... continue ...
},
```

### Step 6: Add Tajik Bilingual Translations

Find the Tajik (`tg:`) section:

```javascript
tg: {
    // ... existing content ...

    "prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (Ҳаммоми нишаста ё таҷҳизот, кӯчон, бо курсии ҳоҷатхона ё бе он)",
    // ... continue ...
},
```

### Step 7: Validate Translations

**CRITICAL:** Must pass before proceeding!

```bash
python3 .claude/scripts/validate_translations.py
```

Expected output:
```
============================================================
TRANSLATION VALIDATION REPORT
============================================================

✅ ALL LANGUAGES VALIDATED
   - All 5 languages have XXX keys
   - No missing or extra keys
   - 50 products translated
```

If validation fails, **STOP** and fix the errors before continuing.

### Step 8: Add data-i18n Attributes to HTML

Find which catalog files contain the products from your batch:

```bash
# Search for a product from your batch
grep -l "SITZ TYPE BATH" catalog_*.html
```

Then add `data-i18n` attributes to each product in the HTML:

**Before:**
```html
<div class="product-name">SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE</div>
```

**After:**
```html
<div class="product-name" data-i18n="prod.0001">SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE</div>
```

**Pro Tip:** Use a Python script to bulk-add data-i18n attributes (see Step 9 example).

### Step 9: Bulk Add data-i18n (Optional Script)

```python
import re

# Read HTML file
with open('catalog_diabetic_hospital.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Products to add (tuples of product_name and prod_id)
products = [
    ("SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE", "prod.0001"),
    ("SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE, WITH FAUCET ATTACHMENT/S", "prod.0002"),
    # ... add all products from batch ...
]

count = 0
for product_name, prod_id in products:
    pattern = f'<div class="product-name">({product_name})</div>'
    replacement = f'<div class="product-name" data-i18n="{prod_id}">\\1</div>'
    if re.search(pattern, content):
        content = re.sub(pattern, replacement, content, count=1)
        count += 1
        print(f"✅ Added {prod_id}")

print(f"Total updated: {count} products")

# Write back
with open('catalog_diabetic_hospital.html', 'w', encoding='utf-8') as f:
    f.write(content)
```

### Step 10: Verify HTML Changes

```bash
# Count how many products now have data-i18n
grep -c 'data-i18n="prod\.' catalog_diabetic_hospital.html

# Should increase by the number of products you added
```

### Step 11: Test in Browser

1. Open the catalog HTML file in a browser
2. Click language selector buttons (Русский, O'zbek, فارسی, Тоҷикӣ)
3. Verify products display bilingual format correctly
4. Check that RTL (Farsi) displays correctly

### Step 12: Commit Changes

```bash
# Stage changes
git add translations.js catalog_*.html

# Create descriptive commit message
git commit -m "Add product translations batch X: prod.00XX-00YY (50 products)

Phase 3 Progress: X/816 products complete (Y%)

TRANSLATIONS:
- Added 50 bilingual product translations
- Languages: en, ru, uz, fa, tg (250 total translations)
- Format: \"ENGLISH NAME (Translation)\" for medical accuracy

PRODUCTS TRANSLATED:
- [List product categories]

HTML UPDATES:
- Added data-i18n attributes to N products in catalog_X.html

VALIDATION:
- All translations validated: ✅ XXX keys in all 5 languages
- No missing or extra keys
- Bilingual format verified

Next: Batch X+1 (prod.00YY-00ZZ) - XXX products remaining"

# Push to remote
git push -u origin claude/explore-repo-and-issue-011CV1PafGmmVRPiMD6AXXFA
```

### Step 13: Update Documentation

After each batch, update these files:

1. **STATUS_SUMMARY.md** - Update progress numbers
2. **PLAN.md** - Note any learnings or strategy changes
3. **This file (CONTINUATION_GUIDE.md)** - If workflow improved

---

## Time Estimates

### Per Batch (50 products):

- **Extract products:** 2 minutes (one-time for all batches)
- **Add English keys:** 10 minutes
- **Add Russian translations:** 15 minutes
- **Add Uzbek translations:** 15 minutes
- **Add Farsi translations:** 15 minutes
- **Add Tajik translations:** 15 minutes
- **Validate:** 1 minute
- **Add HTML data-i18n:** 5-10 minutes
- **Test in browser:** 3 minutes
- **Commit & push:** 2 minutes
- **Update docs:** 3 minutes

**Total per batch:** ~85-90 minutes (1.5 hours)

### Full Project (816 products = 17 batches):

**Estimated total time:** 25-30 hours of focused work

**Recommended pace:** 2-3 batches per session = 3 hours per session

---

## Progress Tracking

### Check Current Progress:

```bash
# Run validation to see how many products are done
python3 .claude/scripts/validate_translations.py

# It will report: "X products translated"
```

### Calculate Remaining:

```
Total products: 816
Completed: X (from validation)
Remaining: 816 - X
Percentage: (X / 816) * 100 = Y%
```

---

## Batch Organization by Catalog

To make work more efficient, you can organize batches by catalog file:

### Recommended Batch Order:

1. **catalog_diabetic_hospital.html** (83 products)
   - Batches 1-2: prod.0001-0083

2. **catalog_patient_care.html** (40 products)
   - Batch 3: prod.0084-0123

3. **catalog_specialized.html** (55 products)
   - Batch 4: prod.0124-0178

4. **catalog_therapeutic.html** (78 products)
   - Batches 5-6: prod.0179-0256

5. **catalog_orthotic_prosthetic.html** (160 products)
   - Batches 7-9: prod.0257-0416

6. **catalog_surgical_dressings.html** (215 products)
   - Batches 10-13: prod.0417-0631

7. **catalog_mobility_aids.html** (292 products)
   - Batches 14-17: prod.0632-0816 (last is only 35 products)

**Benefit:** Work on one catalog at a time, complete HTML updates all at once.

---

## Quality Checklist (Per Batch)

Before committing each batch, verify:

- [ ] All 50 English keys added to translations.js
- [ ] All 50 Russian bilingual translations added
- [ ] All 50 Uzbek bilingual translations added
- [ ] All 50 Farsi bilingual translations added
- [ ] All 50 Tajik bilingual translations added
- [ ] Bilingual format: "ENGLISH (Translation)" for all non-English
- [ ] Validation script passes with no errors
- [ ] HTML data-i18n attributes added for all applicable products
- [ ] Tested in browser - all languages display correctly
- [ ] RTL (Farsi) displays properly
- [ ] Commit message is descriptive
- [ ] STATUS_SUMMARY.md updated with new progress
- [ ] PLAN.md updated if any learnings

---

## Common Issues & Solutions

### Issue: Product not found in HTML

**Solution:** Some products from the extracted list may not be in HTML yet. This is OK - translations are ready for when the product is added to HTML later.

### Issue: Same product appears in multiple catalogs

**Solution:** Use the SAME `prod.XXXX` key in all locations. Don't create duplicate keys.

### Issue: Product name has special regex characters

**Solution:** Escape them when searching in HTML:
- `(` becomes `\\(`
- `)` becomes `\\)`
- `.` becomes `\\.`
- `*` becomes `\\*`

Example:
```python
product_name = "BATTERY \\(OTHER THAN J CELL\\)"
```

### Issue: Validation fails

**Solution:**
1. Read the error message carefully
2. It will tell you which keys are missing/extra and in which language
3. Fix the specific issue
4. Re-run validation

---

## Optimization Tips

### Use Python for Bulk Operations

Instead of manually typing 50 products × 5 languages = 250 entries, use Python to help:

1. Extract product names from HTML
2. Generate translation templates
3. Use AI to help with translations (but verify medical accuracy!)
4. Bulk-add data-i18n attributes

### Work in Focused Sessions

- **Session 1:** Extract all products, translate batch 1-2
- **Session 2:** Translate batch 3-5
- **Session 3:** Translate batch 6-8
- etc.

### Validate Frequently

Don't wait until the end. Validate after every language addition:

```bash
# After adding English
python3 .claude/scripts/validate_translations.py

# After adding Russian
python3 .claude/scripts/validate_translations.py

# etc.
```

Catch errors early!

---

## Emergency Recovery

### If something goes wrong:

1. **Check git status:**
   ```bash
   git status
   ```

2. **See what changed:**
   ```bash
   git diff translations.js
   git diff catalog_*.html
   ```

3. **Revert if needed:**
   ```bash
   # Revert specific file
   git checkout -- translations.js

   # Revert all changes
   git reset --hard HEAD
   ```

4. **Start over from last commit:**
   ```bash
   git log --oneline
   git checkout <commit-hash>
   ```

---

## Next Claude Session Checklist

When you pick up this work again:

1. ✅ Read STATUS_SUMMARY.md - Where are we?
2. ✅ Read PLAN.md - What's the current strategy?
3. ✅ Run validation - Verify current state
4. ✅ Check product list - Ensure /tmp/product_list.txt exists
5. ✅ Determine next batch - What products to translate next?
6. ✅ Follow the workflow above - Systematic process
7. ✅ Update docs after completion - Leave clear status for next session

---

**Good luck! This is important medical work. Accuracy matters!** 🏥
