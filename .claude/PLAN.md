# Translation Project Plan

**Last Updated:** 2025-11-11 03:35 UTC
**Status:** Phase 4 (Product Translations) - Ready to Start

---

## 🎯 PROJECT GOALS

### Primary Goal:
**100% translation coverage** of Holistic Medical Supply website for Medicare/Medicaid patients

### Success Criteria:
1. ✅ All UI elements translated (COMPLETE)
2. ✅ All BOC categories translated (COMPLETE)
3. ✅ All footer/system messages translated (COMPLETE)
4. ⏳ All 817 product names translated (0% - IN PROGRESS)
5. ✅ All translations validated (automated)
6. ✅ All HTML elements have data-i18n attributes
7. ✅ Translations work correctly in browser for all 5 languages
8. ✅ RTL (Farsi) displays correctly

---

## 📊 CURRENT STATUS

### Phases Complete:
- ✅ Phase 1: Navigation & UI (6 keys)
- ✅ Phase 2: BOC Categories (36 keys)
- ✅ Phase 3: Footer & System Messages (107 keys)
- **Total Complete:** 149 keys × 5 languages = 745 translations ✅

### Phase In Progress:
- ⏳ **Phase 4: Product Translations**
  - Target: 817 products × 5 languages = 4,085 translations
  - Progress: 0/817 (0%)

### Overall Progress:
- **149/966 keys complete (15.4%)**
- **745/4,830 translations complete (15.4%)**

---

## 🚀 STRATEGY: BATCH TRANSLATION WORKFLOW

### Decision: Use Full Individual Product Translations (Option B)

**Rationale:**
- Medical accuracy requires 100% precise translations
- No room for errors with automated/dictionary approach
- Each product name is a specific medical device - must be exact
- Bilingual display format ensures both English and native language clarity

### Rejected Alternatives:
- ❌ **Option A: Medical Terms Dictionary** - Not accurate enough for medical devices
- ❌ **Option C: Top 100 Only** - Violates 100% coverage requirement
- ❌ **Option D: English Only** - Doesn't serve non-English speaking patients

---

## 📋 EXECUTION PLAN

### Batch Structure:

**Batch Size:** 50 products per batch
- Large enough for efficiency
- Small enough for accuracy and context management
- Fits well in LLM context window

**Total Batches:** 17 batches
- Batches 1-16: 50 products each (800 products)
- Batch 17: 17 products (final batch)

### Batch Workflow (Per Batch):

1. **Add English translations** to `translations.js` (10 min)
2. **Add Russian bilingual translations** (15 min)
3. **Add Uzbek bilingual translations** (15 min)
4. **Add Farsi bilingual translations** (15 min)
5. **Add Tajik bilingual translations** (15 min)
6. **Validate translations** - MUST PASS (1 min)
7. **Add data-i18n attributes to HTML** (10 min)
8. **Test in browser** (3 min)
9. **Commit with descriptive message** (2 min)
10. **Push to remote** (1 min)
11. **Update STATUS_SUMMARY.md** (3 min)

**Total per batch:** ~90 minutes

### Recommended Batch Order:

**By Catalog File (Most Efficient):**

1. **catalog_diabetic_hospital.html** (83 products)
   - Batch 1: prod.0001-0050
   - Batch 2: prod.0051-0083 (33 products)

2. **catalog_patient_care.html** (40 products)
   - Batch 3: prod.0084-0123 (40 products)

3. **catalog_specialized.html** (55 products)
   - Batch 4: prod.0124-0178 (55 products)

4. **catalog_therapeutic.html** (78 products)
   - Batch 5: prod.0179-0228 (50 products)
   - Batch 6: prod.0229-0256 (28 products)

5. **catalog_orthotic_prosthetic.html** (160 products)
   - Batch 7: prod.0257-0306 (50 products)
   - Batch 8: prod.0307-0356 (50 products)
   - Batch 9: prod.0357-0416 (60 products)

6. **catalog_surgical_dressings.html** (215 products)
   - Batch 10: prod.0417-0466 (50 products)
   - Batch 11: prod.0467-0516 (50 products)
   - Batch 12: prod.0517-0566 (50 products)
   - Batch 13: prod.0567-0631 (65 products)

7. **catalog_mobility_aids.html** (292 products)
   - Batch 14: prod.0632-0681 (50 products)
   - Batch 15: prod.0682-0731 (50 products)
   - Batch 16: prod.0732-0781 (50 products)
   - Batch 17: prod.0782-0817 (36 products)

**Benefit:** Complete one catalog file at a time, making HTML updates more efficient.

---

## ⏱️ TIME ESTIMATES

### Per Batch:
- **90 minutes** per batch (50 products)

### Total Project:
- **17 batches × 90 minutes = 25.5 hours** of focused work

### Session Planning:
- **Option 1:** 2 batches per session × 90 min = 3 hours per session → 9 sessions
- **Option 2:** 3 batches per session × 90 min = 4.5 hours per session → 6 sessions
- **Option 3:** 1 batch per session × 90 min = 1.5 hours per session → 17 sessions

**Recommended:** 2-3 batches per session for optimal balance of speed and accuracy

---

## 🔧 TOOLS & AUTOMATION

### Scripts Created:

1. **validate_translations.py**
   - Validates all keys present in all 5 languages
   - Reports missing/extra keys
   - Counts product translation progress
   - **Usage:** `python3 .claude/scripts/validate_translations.py`

2. **extract_products.py**
   - Extracts all products from HTML catalogs
   - Generates product list with IDs
   - Identifies duplicates
   - **Usage:** `python3 .claude/scripts/extract_products.py`

### Potential Future Scripts:

3. **generate_template.py** (TO CREATE)
   - Generates translation template for a batch
   - Pre-fills English product names
   - Creates empty translation slots
   - Reduces manual typing

4. **add_data_i18n.py** (TO CREATE)
   - Bulk-adds data-i18n attributes to HTML
   - Matches products by name
   - Handles regex escaping automatically
   - Validates HTML structure

### Manual vs Automated:

| Task | Approach | Why |
|------|----------|-----|
| Extract products | Automated ✅ | One-time, 817 products |
| Add English keys | Manual | Accuracy, verify each product |
| Translate to Russian | Manual | Medical accuracy critical |
| Translate to Uzbek | Manual | Medical accuracy critical |
| Translate to Farsi | Manual | Medical accuracy critical |
| Translate to Tajik | Manual | Medical accuracy critical |
| Validate | Automated ✅ | Fast, reliable, catches errors |
| Add data-i18n | Semi-automated | Python script + manual review |
| Test in browser | Manual | Visual verification needed |

---

## ✅ QUALITY ASSURANCE

### Validation at Every Step:

1. **After adding each language:**
   ```bash
   python3 .claude/scripts/validate_translations.py
   ```
   - MUST show: ✅ ALL LANGUAGES VALIDATED
   - If not, STOP and fix before proceeding

2. **Before committing:**
   - Run validation one more time
   - Test in browser
   - Verify bilingual format
   - Check RTL (Farsi) display

3. **After committing:**
   - Verify commit message is descriptive
   - Update STATUS_SUMMARY.md
   - Update this PLAN.md if needed

### Translation Quality Checks:

For each product translation, verify:

- [ ] Medical terminology is professional and accurate
- [ ] Technical terms are preserved (e.g., "INSULIN", "INFUSION")
- [ ] Measurements are unchanged (e.g., "50 ML", "8 HOURS")
- [ ] HCPCS codes are never translated
- [ ] Brand names stay in English (e.g., "BETADINE")
- [ ] Bilingual format: "ENGLISH (Translation)" for non-English
- [ ] Grammar and spelling correct
- [ ] Parentheses, commas, special characters preserved

### HTML Quality Checks:

- [ ] Every product in HTML has data-i18n attribute
- [ ] data-i18n value matches translations.js key exactly
- [ ] Product name in HTML matches English translation exactly
- [ ] No duplicate data-i18n values
- [ ] HTML structure intact (no broken tags)

---

## 📈 PROGRESS TRACKING

### Daily Tracking:

**At End of Each Session:**
1. Run validation to get current count
2. Calculate: `(products_complete / 817) × 100 = X%`
3. Update STATUS_SUMMARY.md with:
   - Products complete
   - Percentage complete
   - Batches remaining
   - Next batch to start
4. Update this PLAN.md with any learnings

### Milestones:

- 📍 **Milestone 1:** 100 products (12%) - Batch 2 complete
- 📍 **Milestone 2:** 200 products (25%) - Batch 4 complete
- 📍 **Milestone 3:** 400 products (50%) - Batch 8 complete
- 📍 **Milestone 4:** 600 products (75%) - Batch 12 complete
- 📍 **Milestone 5:** 817 products (100%) - ALL COMPLETE 🎉

### Velocity Tracking:

After each session, calculate:
- **Products per session** = (products completed this session)
- **Average time per product** = (session time / products completed)
- **Sessions remaining** = (817 - completed) / products per session
- **Hours remaining** = sessions remaining × avg session hours

---

## 🐛 RISK MANAGEMENT

### Potential Risks & Mitigation:

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Translation errors | High | Medium | Manual review, medical terminology verification |
| Missing products in HTML | Low | Low | Some products not in HTML yet, translations ready for future |
| Validation failures | Medium | Low | Frequent validation, catch errors early |
| Inconsistent keys | Medium | Low | Automated validation, strict naming convention |
| RTL display issues | Medium | Low | Test Farsi in browser each batch |
| Context window limits | Low | Medium | 50-product batches fit well in context |
| Git conflicts | Low | Low | Single developer, linear workflow |

### Error Recovery:

If errors occur:

1. **Validation Fails:**
   - Read error message carefully
   - Fix specific missing/extra keys
   - Re-run validation
   - Don't commit until passing

2. **Git Issues:**
   - Check: `git status`
   - Revert if needed: `git checkout -- <file>`
   - Start over from last commit if necessary

3. **HTML Issues:**
   - Search for product in HTML: `grep "PRODUCT NAME" catalog_*.html`
   - Verify data-i18n added correctly
   - Check for typos in key names

---

## 🔄 EVOLVING STRATEGY

### Learnings Log:

**Session 2025-11-11:**
- ✅ Documentation structure works well
- ✅ Validation script is effective
- ✅ Product extraction successful
- ✅ Batch size of 50 is reasonable
- ⚠️ Need to verify HTML products match extracted list (some may not exist yet)

### Strategy Adjustments:

**None yet** - Strategy is solid as designed.

### Future Considerations:

1. **After Batch 5 (250 products):** Re-evaluate time estimates
2. **After Batch 10 (500 products):** Consider automation improvements
3. **At 100% completion:** Plan for maintenance process (adding new products)

---

## 📅 SESSION PLANNING

### Recommended Session Structure:

**Session Duration:** 3-4.5 hours
**Batches per Session:** 2-3 batches

**Example Session Plan:**

```
Hour 1: Batch N
  - Add English, Russian, Uzbek translations (40 min)
  - Add Farsi, Tajik translations (30 min)
  - Validate and add HTML data-i18n (15 min)
  - Test and commit (5 min)

Hour 2: Batch N+1
  - Same structure (90 min)

Hour 3: Batch N+2 (if energy permits)
  - Same structure (90 min)

Final 15 min:
  - Update STATUS_SUMMARY.md
  - Update PLAN.md with learnings
  - Push all changes
```

### Between Sessions:

- Leave clear notes in STATUS_SUMMARY.md
- Commit all work before ending session
- Push to remote repository
- Note next batch number to start

---

## 🎯 NEXT STEPS

### Immediate (Next Session):

1. **Read STATUS_SUMMARY.md** - Understand current state
2. **Read this PLAN.md** - Understand strategy
3. **Start Batch 1** - Products 0001-0050
4. **Follow CONTINUATION_GUIDE.md** - Step-by-step instructions

### Short-term (Next 3 Sessions):

- Complete Batches 1-9 (450 products, 55%)
- Complete `catalog_diabetic_hospital.html`
- Complete `catalog_patient_care.html`
- Complete `catalog_specialized.html`
- Complete most of `catalog_therapeutic.html`

### Medium-term (Next 6 Sessions):

- Complete all 817 products
- 100% translation coverage achieved
- All HTML updated with data-i18n
- Full website multilingual

### Long-term (After Completion):

- Establish maintenance process for new products
- Consider adding more languages
- Develop patient education materials in multiple languages
- Explore PDF catalog generation in multiple languages

---

## 🔐 CRITICAL RULES (NEVER BREAK)

### Before EVERY Commit:

1. ✅ **Run validation script** - MUST PASS
2. ✅ **All 5 languages have identical keys**
3. ✅ **Bilingual format for products** - "ENGLISH (Translation)"
4. ✅ **Test in browser** - Verify display
5. ✅ **Update STATUS_SUMMARY.md** - Track progress

### For EVERY Product:

1. ✅ **Medical accuracy** - Professional terminology
2. ✅ **HCPCS codes unchanged** - Never translate codes
3. ✅ **Measurements preserved** - Exact numbers and units
4. ✅ **Bilingual format** - English + (Translation)

### For EVERY Session:

1. ✅ **Start by reading docs** - STATUS_SUMMARY.md, PLAN.md
2. ✅ **End by updating docs** - Leave clear status
3. ✅ **Commit frequently** - After each batch
4. ✅ **Push to remote** - Don't leave work local-only

---

## 📚 DOCUMENTATION INDEX

### Files Created:

1. **TRANSLATION_STANDARDS.md** - Comprehensive standards reference
2. **CONTINUATION_GUIDE.md** - Step-by-step workflow instructions
3. **STATUS_SUMMARY.md** - Current status tracking
4. **PLAN.md** - This file - strategy and planning

### When to Read Each:

- **New session starting?** → Read STATUS_SUMMARY.md first
- **Need to understand strategy?** → Read PLAN.md
- **Ready to work on batch?** → Read CONTINUATION_GUIDE.md
- **Questions about standards?** → Read TRANSLATION_STANDARDS.md
- **Check progress?** → Run validate_translations.py

---

## 🎉 COMPLETION DEFINITION

**Project is COMPLETE when:**

- ✅ All 817 products translated in all 5 languages
- ✅ All 4,830 translations present and validated
- ✅ All products in HTML have data-i18n attributes
- ✅ All languages work correctly in browser
- ✅ RTL (Farsi) displays properly
- ✅ Validation script passes: ✅ ALL LANGUAGES VALIDATED
- ✅ All documentation updated and current
- ✅ All changes committed and pushed to remote

**Celebration criteria:** 🎊 Website serves patients in 5 languages!

---

**Last Updated:** 2025-11-11 03:35 UTC
**Next Update:** After first batch completion
**Status:** Ready to begin batch translation work

---

**End of Plan**
