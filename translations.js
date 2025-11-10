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

    // Russian translations
    ru: {
        // Header
        "header.company": "Holistic Medical Supply",
        "header.tagline": "Полные решения DMEPOS • Аккредитация BOC",

        // Navigation
        "nav.home": "Главная",
        "nav.diabetic": "Диабетическое и больничное оборудование",
        "nav.patient_care": "Уход за пациентами",
        "nav.therapeutic": "Терапевтическое оборудование",
        "nav.mobility": "Средства передвижения и инвалидные коляски",
        "nav.surgical": "Хирургические повязки и компрессия",
        "nav.orthotic": "Ортопедическое и протезное",
        "nav.specialized": "Специализированное оборудование",

        // BOC Credentials
        "boc.accreditation": "Аккредитация BOC",
        "boc.facility": "Учреждение #S72641",
        "boc.categories": "Одобренных категорий",
        "boc.categories_value": "36",
        "boc.products": "Коды продуктов",
        "boc.products_value": "535+",
        "boc.service": "Зона обслуживания",
        "boc.service_value": "Нью-Йорк, Бруклин, Статен-Айленд, округ Нассау",

        // Intro Section
        "intro.title": "Профессиональный каталог продукции для врачей",
        "intro.p1": "Добро пожаловать в комплексный каталог DMEPOS компании Holistic Medical Supply. Мы являемся аккредитованным BOC поставщиком, обслуживающим медицинских работников в столичном регионе Нью-Йорка.",
        "intro.p2": "Наш обширный ассортимент охватывает 36 категорий, утвержденных BOC, с более чем 535 кодами продуктов HCPCS, что гарантирует, что вы найдете подходящее оборудование для нужд ваших пациентов.",
        "intro.p3": "Просмотрите наш полный каталог ниже, организованный по категориям оборудования. Каждый продукт включает свой код HCPCS для удобства заказа и выставления счетов.",

        // Catalog Categories
        "catalog.diabetic.title": "🏥 Диабетическое и больничное оборудование",
        "catalog.diabetic.desc": "Полный ассортимент диабетических принадлежностей, больничных кроватей и необходимого медицинского оборудования",
        "catalog.diabetic.items": "Включает: Глюкометры (Blood Glucose Monitors), тест-полоски (Test Strips), больничные кровати (Hospital Beds), туалетные стулья (Commodes), небулайзеры (Nebulizers), аппараты TENS (TENS Units)",
        "catalog.diabetic.button": "Смотреть каталог диабетического и больничного оборудования",
        "catalog.diabetic.count": "88 продуктов",

        "catalog.patient_care.title": "Оборудование для ухода за пациентами",
        "catalog.patient_care.desc": "Специализированное оборудование для комплексного ухода за пациентами и поддержки повседневной жизни",
        "catalog.patient_care.items": "Включает: Нейростимуляторы (Neurostimulators), принадлежности для трахеостомии (Tracheostomy Supplies), урологическое оборудование (Urological Equipment), энтеральное питание (Enteral Nutrition)",
        "catalog.patient_care.button": "Смотреть каталог оборудования для ухода за пациентами",
        "catalog.patient_care.count": "45 продуктов",

        "catalog.therapeutic.title": "Терапевтическое оборудование",
        "catalog.therapeutic.desc": "Современные терапевтические устройства и реабилитационное оборудование",
        "catalog.therapeutic.items": "Включает: Терапевтические матрасы (Therapeutic Mattresses), оборудование для позиционирования (Positioning Equipment), терапевтические устройства (Therapy Devices)",
        "catalog.therapeutic.button": "Смотреть каталог терапевтического оборудования",
        "catalog.therapeutic.count": "83 продукта",

        "catalog.mobility.title": "Средства передвижения и инвалидные коляски",
        "catalog.mobility.desc": "Комплексные решения для передвижения от базовых средств до современных инвалидных колясок",
        "catalog.mobility.items": "Включает: Трости (Canes), костыли (Crutches), ходунки (Walkers), механические инвалидные коляски (Manual Wheelchairs), электрические инвалидные коляски (Power Wheelchairs), скутеры (Scooters)",
        "catalog.mobility.button": "Смотреть каталог средств передвижения",
        "catalog.mobility.count": "297 продуктов",

        "catalog.surgical.title": "Хирургические повязки и компрессия",
        "catalog.surgical.desc": "Профессиональные средства для ухода за ранами и компрессионной терапии",
        "catalog.surgical.items": "Включает: Хирургические повязки (Surgical Dressings), бинты (Bandages), компрессионная одежда и насосы для лимфедемы (Lymphedema Compression Garments and Pumps)",
        "catalog.surgical.button": "Смотреть каталог хирургических повязок и компрессии",
        "catalog.surgical.count": "220 продуктов",

        "catalog.orthotic.title": "Ортопедическое и протезное оборудование",
        "catalog.orthotic.desc": "Индивидуальные и готовые ортопедические и протезные устройства",
        "catalog.orthotic.items": "Включает: Брейсы (Braces), поддержки (Supports), ортопедические устройства (Orthotic Devices), протезные компоненты (Prosthetic Components)",
        "catalog.orthotic.button": "Смотреть каталог ортопедического и протезного оборудования",
        "catalog.orthotic.count": "165 продуктов",

        "catalog.specialized.title": "Специализированное оборудование",
        "catalog.specialized.desc": "Специализированное медицинское оборудование для уникальных потребностей пациентов",
        "catalog.specialized.items": "Включает: Специализированные мониторинговые устройства (Monitoring Devices), адаптивное оборудование (Adaptive Equipment), уникальные решения DME (DME Solutions)",
        "catalog.specialized.button": "Смотреть каталог специализированного оборудования",
        "catalog.specialized.count": "60 продуктов",

        // Roadmap Section
        "roadmap.title": "Наша дорожная карта услуг",
        "roadmap.subtitle": "Создание комплексного решения DMEPOS для медицинских работников",

        "roadmap.phase1.title": "Доступно сегодня",
        "roadmap.phase1.badge": "Текущие услуги",
        "roadmap.phase1.item1": "7-дневная доставка специальных заказов",
        "roadmap.phase1.item2": "2-дневная доставка товаров на складе",
        "roadmap.phase1.item3": "Бесплатная доставка в зоне обслуживания",
        "roadmap.phase1.item4": "Принимаем Medicare/Medicaid + наличные",
        "roadmap.phase1.item5": "Заказ по факсу, электронной почте или телефону",
        "roadmap.phase1.item6": "Член VGM GPO с доступом к комплексному ассортименту",
        "roadmap.phase1.item7": "Лицензированный и аккредитованный поставщик DME (BOC #S72641)",

        "roadmap.phase2.title": "Скоро",
        "roadmap.phase2.badge": "30 дней",
        "roadmap.phase2.item1": "Улучшенные уровни складских запасов",
        "roadmap.phase2.item2": "Интеграция с порталом Parachute Health для электронных рецептов",
        "roadmap.phase2.item3": "Упрощенный процесс заказа",
        "roadmap.phase2.item4": "Улучшенное отслеживание доставки",

        "roadmap.phase3.title": "Будущее расширение",
        "roadmap.phase3.badge": "60-90+ дней",
        "roadmap.phase3.item1": "Принятие дополнительных страховых плательщиков",
        "roadmap.phase3.item2": "Дополнительные категории продуктов (CPAP, O2 и т.д.)",
        "roadmap.phase3.item3": "Расширенное покрытие зоны обслуживания",
        "roadmap.phase3.item4": "Онлайн-портал для заказов",

        // Footer
        "footer.contact": "Контактная информация",
        "footer.address": "Адрес",
        "footer.address_value": "1170 Port Washington Blvd, Port Washington, NY 11050",
        "footer.phone": "Телефон",
        "footer.phone_value": "516-386-3343",
        "footer.fax": "Факс",
        "footer.fax_value": "363-999-0019",
        "footer.orders": "Заказы",
        "footer.orders_value": "orders@holisticmedical.supply",
        "footer.support": "Поддержка",
        "footer.support_value": "support@holisticmedical.supply",

        // Catalog Page Headers
        "catalog_page.title_diabetic": "Каталог диабетического и больничного оборудования",
        "catalog_page.title_patient_care": "Каталог оборудования для ухода за пациентами",
        "catalog_page.title_therapeutic": "Каталог терапевтического оборудования",
        "catalog_page.title_mobility": "Каталог средств передвижения и инвалидных колясок",
        "catalog_page.title_surgical": "Каталог хирургических повязок и компрессии",
        "catalog_page.title_orthotic": "Каталог ортопедического и протезного оборудования",
        "catalog_page.title_specialized": "Каталог специализированного оборудования",

        // Category Headers on Catalog Pages
        "category.diabetic": "Диабетические принадлежности (Diabetic Supplies)",
        "category.hospital_beds": "Больничные кровати и аксессуары (Hospital Beds & Accessories)",
        "category.commodes": "Туалетные стулья и безопасность в ванной (Commodes & Bathroom Safety)",
        "category.nebulizers": "Небулайзеры и респираторное оборудование (Nebulizers & Respiratory)",
        "category.tens": "Аппараты TENS и обезболивание (TENS Units & Pain Management)",
        "category.patient_aids": "Средства для пациентов (Patient Aids)",
        "category.neurostim": "Нейростимуляторы (Neurostimulators)",
        "category.trach": "Принадлежности для трахеостомии (Tracheostomy Supplies)",
        "category.urology": "Урологические принадлежности (Urological Supplies)",
        "category.enteral": "Энтеральное питание (Enteral Nutrition)",
        "category.therapeutic_general": "Терапевтическое оборудование (Therapeutic Equipment)",
        "category.canes": "Трости (Canes)",
        "category.crutches": "Костыли (Crutches)",
        "category.walkers": "Ходунки и роллаторы (Walkers & Rollators)",
        "category.manual_wheelchairs": "Механические инвалидные коляски (Manual Wheelchairs)",
        "category.power_wheelchairs": "Электрические инвалидные коляски (Power Wheelchairs)",
        "category.scooters": "Мобильные скутеры (Mobility Scooters)",
        "category.wheelchair_accessories": "Аксессуары для инвалидных колясок (Wheelchair Accessories)",
        "category.surgical_dressings": "Хирургические повязки (Surgical Dressings)",
        "category.compression": "Компрессионная терапия (Compression Therapy)",
        "category.lymphedema": "Управление лимфедемой (Lymphedema Management)",
        "category.orthotics": "Ортопедические устройства (Orthotic Devices)",
        "category.prosthetics": "Протезные компоненты (Prosthetic Components)",
        "category.braces": "Брейсы и поддержки (Braces & Supports)",
        "category.specialized_general": "Специализированное оборудование (Specialized Equipment)",

        // Language Selector
        "lang.select": "Язык",
        "lang.en": "English",
        "lang.ru": "Русский",
        "lang.uz": "O'zbek",
        "lang.fa": "فارسی",
        "lang.tg": "Тоҷикӣ"
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
