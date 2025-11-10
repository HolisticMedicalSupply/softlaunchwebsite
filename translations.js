/**
 * Holistic Medical Supply - Multi-Language Translations
 * Languages: English (en), Russian (ru), Uzbek (uz), Farsi (fa), Tajik (tg)
 *
 * Note: Medical/product names include English in parentheses for clarity
 */

const translations = {
    en: {
        // Header
        "header.company": "Holistic Medical Supply",
        "header.tagline": "Complete DMEPOS Solutions • BOC Accredited",

        // Navigation
        "nav.home": "Home",
        "nav.diabetic": "Diabetic & Hospital",
        "nav.patient_care": "Patient Care",
        "nav.therapeutic": "Therapeutic",
        "nav.mobility": "Mobility & Wheelchairs",
        "nav.surgical": "Surgical & Compression",
        "nav.orthotic": "Orthotic & Prosthetic",
        "nav.specialized": "Specialized Equipment",

        // BOC Credentials
        "boc.accreditation": "BOC Accreditation",
        "boc.facility": "Facility #S72641",
        "boc.categories": "Categories Approved",
        "boc.categories_value": "36",
        "boc.products": "Product Codes",
        "boc.products_value": "535+",
        "boc.service": "Service Area",
        "boc.service_value": "NYC, Brooklyn, SI, Nassau County",

        // Intro Section
        "intro.title": "Professional Product Catalog for Physicians",
        "intro.p1": "Welcome to Holistic Medical Supply's comprehensive DMEPOS catalog. We are a BOC-accredited supplier serving healthcare providers across the New York metropolitan area.",
        "intro.p2": "Our extensive inventory covers 36 BOC-approved categories with over 535 HCPCS product codes, ensuring you can find the right equipment for your patients' needs.",
        "intro.p3": "Browse our complete catalog below, organized by equipment category. Each product includes its HCPCS code for easy ordering and billing reference.",

        // Catalog Categories
        "catalog.diabetic.title": "🏥 Diabetic & Hospital Equipment",
        "catalog.diabetic.desc": "Complete range of diabetic supplies, hospital beds, and essential medical equipment",
        "catalog.diabetic.items": "Includes: Blood glucose monitors, test strips, hospital beds, commodes, nebulizers, TENS units",
        "catalog.diabetic.button": "View Diabetic & Hospital Catalog",
        "catalog.diabetic.count": "88 Products",

        "catalog.patient_care.title": "Patient Care Equipment",
        "catalog.patient_care.desc": "Specialized equipment for comprehensive patient care and daily living support",
        "catalog.patient_care.items": "Includes: Neurostimulators, tracheostomy supplies, urological equipment, enteral nutrition",
        "catalog.patient_care.button": "View Patient Care Catalog",
        "catalog.patient_care.count": "45 Products",

        "catalog.therapeutic.title": "Therapeutic Equipment",
        "catalog.therapeutic.desc": "Advanced therapeutic devices and rehabilitation equipment",
        "catalog.therapeutic.items": "Includes: Therapeutic mattresses, positioning equipment, therapy devices",
        "catalog.therapeutic.button": "View Therapeutic Catalog",
        "catalog.therapeutic.count": "83 Products",

        "catalog.mobility.title": "Mobility Aids & Wheelchairs",
        "catalog.mobility.desc": "Comprehensive mobility solutions from basic aids to advanced wheelchairs",
        "catalog.mobility.items": "Includes: Canes, crutches, walkers, manual wheelchairs, power wheelchairs, scooters",
        "catalog.mobility.button": "View Mobility Catalog",
        "catalog.mobility.count": "297 Products",

        "catalog.surgical.title": "Surgical Dressings & Compression",
        "catalog.surgical.desc": "Professional-grade wound care and compression therapy supplies",
        "catalog.surgical.items": "Includes: Surgical dressings, bandages, lymphedema compression garments and pumps",
        "catalog.surgical.button": "View Surgical & Compression Catalog",
        "catalog.surgical.count": "220 Products",

        "catalog.orthotic.title": "Orthotic & Prosthetic",
        "catalog.orthotic.desc": "Custom and prefabricated orthotics and prosthetic devices",
        "catalog.orthotic.items": "Includes: Braces, supports, orthotic devices, prosthetic components",
        "catalog.orthotic.button": "View Orthotic & Prosthetic Catalog",
        "catalog.orthotic.count": "165 Products",

        "catalog.specialized.title": "Specialized Equipment",
        "catalog.specialized.desc": "Specialized medical equipment for unique patient needs",
        "catalog.specialized.items": "Includes: Specialized monitoring devices, adaptive equipment, unique DME solutions",
        "catalog.specialized.button": "View Specialized Catalog",
        "catalog.specialized.count": "60 Products",

        // Roadmap Section
        "roadmap.title": "Our Services Roadmap",
        "roadmap.subtitle": "Building a comprehensive DMEPOS solution for healthcare providers",

        "roadmap.phase1.title": "Available Today",
        "roadmap.phase1.badge": "Current Services",
        "roadmap.phase1.item1": "7-day delivery on special orders",
        "roadmap.phase1.item2": "2-day delivery on in-stock orders",
        "roadmap.phase1.item3": "Free delivery within service area",
        "roadmap.phase1.item4": "Medicare/Medicaid + Cash payments accepted",
        "roadmap.phase1.item5": "Order via Fax, Email, or Phone",
        "roadmap.phase1.item6": "VGM GPO member with comprehensive inventory access",
        "roadmap.phase1.item7": "Licensed & accredited DME supplier (BOC #S72641)",

        "roadmap.phase2.title": "Coming Soon",
        "roadmap.phase2.badge": "30 Days",
        "roadmap.phase2.item1": "Improved in-stock inventory levels",
        "roadmap.phase2.item2": "Parachute Health Portal integration for e-prescribing",
        "roadmap.phase2.item3": "Streamlined ordering process",
        "roadmap.phase2.item4": "Enhanced delivery tracking",

        "roadmap.phase3.title": "Future Expansion",
        "roadmap.phase3.badge": "60-90+ Days",
        "roadmap.phase3.item1": "Additional insurance payers accepted",
        "roadmap.phase3.item2": "Additional product categories (CPAP, O2, etc.)",
        "roadmap.phase3.item3": "Expanded service area coverage",
        "roadmap.phase3.item4": "Online ordering portal",

        // Footer
        "footer.contact": "Contact Information",
        "footer.address": "Address",
        "footer.address_value": "1170 Port Washington Blvd, Port Washington, NY 11050",
        "footer.phone": "Phone",
        "footer.phone_value": "516-386-3343",
        "footer.fax": "Fax",
        "footer.fax_value": "363-999-0019",
        "footer.orders": "Orders",
        "footer.orders_value": "orders@holisticmedical.supply",
        "footer.support": "Support",
        "footer.support_value": "support@holisticmedical.supply",

        // Catalog Page Headers
        "catalog_page.title_diabetic": "Diabetic & Hospital Equipment Catalog",
        "catalog_page.title_patient_care": "Patient Care Equipment Catalog",
        "catalog_page.title_therapeutic": "Therapeutic Equipment Catalog",
        "catalog_page.title_mobility": "Mobility Aids & Wheelchairs Catalog",
        "catalog_page.title_surgical": "Surgical Dressings & Compression Catalog",
        "catalog_page.title_orthotic": "Orthotic & Prosthetic Catalog",
        "catalog_page.title_specialized": "Specialized Equipment Catalog",

        // Category Headers on Catalog Pages
        "category.diabetic": "Diabetic Supplies",
        "category.hospital_beds": "Hospital Beds & Accessories",
        "category.commodes": "Commodes & Bathroom Safety",
        "category.nebulizers": "Nebulizers & Respiratory",
        "category.tens": "TENS Units & Pain Management",
        "category.patient_aids": "Patient Aids",
        "category.neurostim": "Neurostimulators",
        "category.trach": "Tracheostomy Supplies",
        "category.urology": "Urological Supplies",
        "category.enteral": "Enteral Nutrition",
        "category.therapeutic_general": "Therapeutic Equipment",
        "category.canes": "Canes",
        "category.crutches": "Crutches",
        "category.walkers": "Walkers & Rollators",
        "category.manual_wheelchairs": "Manual Wheelchairs",
        "category.power_wheelchairs": "Power Wheelchairs",
        "category.scooters": "Mobility Scooters",
        "category.wheelchair_accessories": "Wheelchair Accessories",
        "category.surgical_dressings": "Surgical Dressings",
        "category.compression": "Compression Therapy",
        "category.lymphedema": "Lymphedema Management",
        "category.orthotics": "Orthotic Devices",
        "category.prosthetics": "Prosthetic Components",
        "category.braces": "Braces & Supports",
        "category.specialized_general": "Specialized Equipment",

        // Language Selector
        "lang.select": "Language",
        "lang.en": "English",
        "lang.ru": "Русский",
        "lang.uz": "O'zbek",
        "lang.fa": "فارسی",
        "lang.tg": "Тоҷикӣ"
    },

    // Placeholder structures for other languages (to be filled incrementally)
    ru: {
        // Russian translations will be added incrementally
    },

    uz: {
        // Uzbek translations will be added incrementally
    },

    fa: {
        // Farsi translations will be added incrementally
    },

    tg: {
        // Tajik translations will be added incrementally
    }
};

// Export for use in language-toggle.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
