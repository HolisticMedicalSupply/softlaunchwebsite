# Translation System Standards & Documentation

**Document Version:** 1.0
**Last Updated:** 2025-11-11
**Branch:** `claude/explore-repo-and-issue-011CV1PafGmmVRPiMD6AXXFA`

---

## ⚠️ CRITICAL: Medical Accuracy Requirements

This is a **MEDICAL DEVICE SUPPLY CATALOG** serving Medicare/Medicaid patients. Translation accuracy is **CRITICAL** for patient safety and regulatory compliance.

### Non-Negotiable Standards:
1. ✅ **100% translation coverage** - Every piece of text MUST be translatable
2. ✅ **Medical terminology accuracy** - Use proper medical terms in all languages
3. ✅ **Bilingual product display** - Show both English and native language for clarity
4. ✅ **HCPCS code preservation** - Never translate HCPCS codes themselves
5. ✅ **Regulatory compliance** - Maintain BOC/Medicare terminology standards

---

## Languages Supported

1. **English (en)** - Default language, source of truth
2. **Russian (ru)** - Русский
3. **Uzbek (uz)** - O'zbek
4. **Farsi (fa)** - فارسی (RTL language)
5. **Tajik (tg)** - Тоҷикӣ

---

## File Structure

```
/
├── translations.js                 # Master translation file (1 file, all languages)
├── translator.js                   # Translation engine (DO NOT MODIFY)
├── index.html                      # Homepage
├── catalog_*.html                  # 7 catalog pages (all need data-i18n attributes)
├── .claude/
│   ├── TRANSLATION_STANDARDS.md   # This file - translation standards
│   ├── CONTINUATION_GUIDE.md      # Guide for continuing translation work
│   ├── STATUS_SUMMARY.md          # Current status and progress tracking
│   ├── PLAN.md                    # Evolving plan and what's next
│   └── scripts/
│       ├── validate_translations.py   # Validates translation completeness
│       ├── extract_products.py        # Extracts products from HTML
│       └── generate_template.py       # Generates translation templates
```

---

## Translation Key Naming Convention

### Format: `{category}.{identifier}`

#### Categories:

- **`nav.*`** - Navigation menu items
- **`cat.*`** - BOC category headers (36 categories)
- **`boc.*`** - BOC category list and labels
- **`prod.*`** - Product names (816 products)
- **`product.*`** - Product-related labels (e.g., "HCPCS Code")
- **`catalog.*`** - Catalog page content
- **`footer.*`** - Footer content
- **`sys.*`** - System messages and notifications

#### Examples:

```javascript
"nav.home": "Home"
"cat.dm13": "DM13: INSULIN INFUSION PUMPS (BOC Category)"
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE..."
"product.hcpcs_code": "HCPCS Code"
```

---

## Product Translation Format: BILINGUAL DISPLAY

**CRITICAL:** All product names MUST use the bilingual format to ensure medical accuracy.

### Format:
```
"ENGLISH PRODUCT NAME (Native Language Translation)"
```

### Why Bilingual?
1. **Medical Accuracy** - English medical terms are universally recognized
2. **HCPCS Compliance** - Official product names must remain in English
3. **Patient Safety** - Prevents miscommunication with healthcare providers
4. **Professional Standard** - Matches how medical documentation works

### Examples:

**English (Source):**
```javascript
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE"
```

**Russian (Bilingual):**
```javascript
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (Сидячая ванна или оборудование, портативная, используется с туалетным стулом или без него)"
```

**Uzbek (Bilingual):**
```javascript
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (Sitz tipidagi vanna yoki uskunalar, ko'chma, hojatxona kursisi bilan yoki usiz)"
```

**Farsi (Bilingual - RTL):**
```javascript
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (حمام یا تجهیزات نشیمن، قابل حمل، با یا بدون صندلی توالت)"
```

**Tajik (Bilingual):**
```javascript
"prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (Ҳаммоми нишаста ё таҷҳизот, кӯчон, бо курсии ҳоҷатхона ё бе он)"
```

---

## translations.js Structure

### File Organization:

```javascript
const translations = {
    en: {
        // Navigation (6 items)
        "nav.home": "Home",
        "nav.about": "About",
        ...

        // BOC Categories (36 items)
        "cat.dm13": "DM13: INSULIN INFUSION PUMPS (BOC Category)",
        ...

        // Catalog Page Content
        "catalog.diabetic.title": "Diabetic & Hospital Equipment",
        ...

        // BOC Category List
        "boc.title": "BOC Certified Categories",
        ...

        // Footer
        "footer.ordering_title": "⚡ STREAMLINED PHYSICIAN ORDERING PROCESS",
        ...

        // Product Labels
        "product.hcpcs_code": "HCPCS Code",

        // Products (816 items) - IN PROGRESS
        "prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE",
        "prod.0002": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE, WITH FAUCET ATTACHMENT/S",
        ...
        "prod.0816": "[Last product]"
    },

    ru: {
        // Same keys, Russian bilingual translations
        "prod.0001": "SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE (Сидячая ванна...)",
        ...
    },

    uz: {
        // Same keys, Uzbek bilingual translations
        ...
    },

    fa: {
        // Same keys, Farsi bilingual translations (RTL)
        ...
    },

    tg: {
        // Same keys, Tajik bilingual translations
        ...
    }
};
```

---

## HTML Integration

### Adding Translation Support to HTML Elements

#### Step 1: Add `data-i18n` attribute

**Before:**
```html
<div class="product-name">SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE</div>
```

**After:**
```html
<div class="product-name" data-i18n="prod.0001">SITZ TYPE BATH OR EQUIPMENT, PORTABLE, USED WITH OR WITHOUT COMMODE</div>
```

#### Step 2: The JavaScript automatically translates on language change

The `translator.js` file handles all translation logic automatically. No additional HTML changes needed.

### Which HTML files need data-i18n attributes?

1. **index.html** - Homepage (DONE ✅)
2. **catalog_diabetic_hospital.html** - 83 products (IN PROGRESS ⏳)
3. **catalog_mobility_aids.html** - 292 products (PENDING ⏳)
4. **catalog_orthotic_prosthetic.html** - 160 products (PENDING ⏳)
5. **catalog_patient_care.html** - 40 products (PENDING ⏳)
6. **catalog_specialized.html** - 55 products (PENDING ⏳)
7. **catalog_surgical_dressings.html** - 215 products (PENDING ⏳)
8. **catalog_therapeutic.html** - 78 products (PENDING ⏳)

**Total:** 923 product instances across 7 files (some duplicates, ~816 unique products)

---

## Adding New Translations: Step-by-Step Process

### For Individual Products (Small batches):

#### Step 1: Add English key to translations.js
```javascript
"prod.0050": "HYDROCOLLATOR UNIT, PORTABLE"
```

#### Step 2: Add Russian bilingual translation
```javascript
"prod.0050": "HYDROCOLLATOR UNIT, PORTABLE (Гидроколлаторный аппарат, портативный)"
```

#### Step 3: Add Uzbek bilingual translation
```javascript
"prod.0050": "HYDROCOLLATOR UNIT, PORTABLE (Gidrokolator qurilmasi, ko'chma)"
```

#### Step 4: Add Farsi bilingual translation
```javascript
"prod.0050": "HYDROCOLLATOR UNIT, PORTABLE (واحد هیدروکلاتور، قابل حمل)"
```

#### Step 5: Add Tajik bilingual translation
```javascript
"prod.0050": "HYDROCOLLATOR UNIT, PORTABLE (Дастгоҳи гидроколлатор, кӯчон)"
```

#### Step 6: Add data-i18n to HTML
Find the product in the HTML catalog and add `data-i18n="prod.0050"`:
```html
<div class="product-name" data-i18n="prod.0050">HYDROCOLLATOR UNIT, PORTABLE</div>
```

#### Step 7: Validate
```bash
python3 .claude/scripts/validate_translations.py
```

#### Step 8: Test in browser
1. Save all files
2. Refresh browser
3. Click language buttons to verify translation appears correctly

---

### For Batch Translation (50+ products):

See **CONTINUATION_GUIDE.md** for the batch workflow process.

---

## Validation Requirements

### Before EVERY commit:

```bash
# Run validation script
python3 .claude/scripts/validate_translations.py

# Expected output:
✅ All 5 languages have identical keys
✅ No missing or extra keys
✅ X products translated
```

### What validation checks:

1. **Key count consistency** - All 5 languages have same number of keys
2. **Key name consistency** - All keys exist in all languages
3. **No missing translations** - Every English key has translations
4. **No extra translations** - No orphaned keys in translation languages
5. **Product count tracking** - Counts how many products are translated

### If validation fails:

1. **STOP immediately** - Do not commit
2. **Check the error message** - Identifies which keys are missing/extra
3. **Fix the issue** - Add missing translations or remove extra ones
4. **Re-run validation** - Must pass before committing
5. **Document the fix** - Note what was wrong and how you fixed it

---

## Quality Standards

### Translation Quality Checklist:

- [ ] Medical terminology is accurate and professional
- [ ] Grammar and spelling are correct
- [ ] Bilingual format is preserved (English + Translation)
- [ ] HCPCS codes are unchanged
- [ ] Measurements and units are preserved (e.g., "50 ML")
- [ ] Technical abbreviations are handled correctly (e.g., "TENS", "NMES")
- [ ] Parentheses and special characters are preserved
- [ ] RTL (Farsi) text displays correctly

### Common Translation Pitfalls to Avoid:

❌ **DON'T:** Translate HCPCS codes
✅ **DO:** Keep codes as-is (e.g., "E0160" stays "E0160")

❌ **DON'T:** Translate brand names
✅ **DO:** Keep brand names in English (e.g., "BETADINE" stays "BETADINE")

❌ **DON'T:** Translate technical abbreviations
✅ **DO:** Keep abbreviations in English (e.g., "TENS" stays "TENS")

❌ **DON'T:** Use only native language
✅ **DO:** Use bilingual format: "ENGLISH (Native)"

❌ **DON'T:** Modify measurements
✅ **DO:** Keep exact measurements (e.g., "50 ML" stays "50 ML")

---

## Git Workflow

### Branch:
```bash
claude/explore-repo-and-issue-011CV1PafGmmVRPiMD6AXXFA
```

### Commit Message Format:

```
Add product translations batch X: prod.00XX-00YY (N products)

Phase 3 Progress: X/816 products complete (Y%)

TRANSLATIONS:
- Added N bilingual product translations
- Languages: en, ru, uz, fa, tg (N×5 = X total translations)
- Format: "ENGLISH NAME (Translation)" for medical accuracy

PRODUCTS TRANSLATED:
- Category 1 (prod.00XX-00YY)
- Category 2 (prod.00ZZ-00WW)

HTML UPDATES:
- Added data-i18n attributes to N products in catalog_X.html

VALIDATION:
- All translations validated: ✅ X keys in all 5 languages
- No missing or extra keys
- Bilingual format verified

Next: Batch X (prod.00YY-00ZZ) - X products remaining
```

### Push Command:
```bash
git push -u origin claude/explore-repo-and-issue-011CV1PafGmmVRPiMD6AXXFA
```

---

## Troubleshooting

### Issue: Validation fails with "missing keys"

**Solution:** Check which keys are missing in which languages, add them.

### Issue: RTL (Farsi) text displays backwards

**Solution:** Verify HTML has `dir="rtl"` for Farsi. The translator.js handles this automatically.

### Issue: Translation doesn't appear in browser

**Checklist:**
1. Is key in translations.js in ALL 5 languages? ✓
2. Does HTML element have `data-i18n="key"`? ✓
3. Is key name identical in both places? ✓
4. Did you refresh the browser with Ctrl+Shift+R? ✓

### Issue: Product appears twice with different translations

**Solution:** Each product should have ONE unique `prod.XXXX` key. If same product appears in multiple catalogs, use the SAME key in all locations.

---

## Progress Tracking

### Current Status (Updated Every Session):

See **STATUS_SUMMARY.md** for current progress.

### Translation Progress by Category:

| Category | Status | Count |
|----------|--------|-------|
| Navigation | ✅ Complete | 6 |
| BOC Categories | ✅ Complete | 36 |
| Catalog Pages | ✅ Complete | ~50 |
| Footer | ✅ Complete | ~15 |
| Product Labels | ✅ Complete | 1 |
| **Products** | ⏳ **IN PROGRESS** | **0/816** |

---

## Future Enhancements

### Phase 4 (Future):
- Add search functionality with translation support
- Add autocomplete for product search
- Add filter by BOC category with translations
- Add PDF export of catalogs in multiple languages
- Add patient education materials in all languages

### Scalability Considerations:
- System supports unlimited products (current: 816, room for thousands)
- System supports unlimited languages (current: 5, can add more)
- System supports unlimited content types (can add forms, instructions, etc.)
- All validated automatically with scripts

---

## Questions & Support

### For Future Claude Sessions:

1. Read **STATUS_SUMMARY.md** first - Know where we are
2. Read **CONTINUATION_GUIDE.md** - Know what to do next
3. Read this file (TRANSLATION_STANDARDS.md) - Know how to do it
4. Check **PLAN.md** - Know the evolving strategy

### Critical Rules:

1. ✅ **ALWAYS validate before committing** - Run validate_translations.py
2. ✅ **ALWAYS use bilingual format for products** - English + (Translation)
3. ✅ **ALWAYS update STATUS_SUMMARY.md after every session** - Track progress
4. ✅ **ALWAYS update PLAN.md with learnings** - Evolve the strategy
5. ✅ **NEVER commit with validation errors** - Fix first, then commit
6. ✅ **NEVER skip HTML data-i18n attributes** - Translations won't work without them

---

**Document End**
