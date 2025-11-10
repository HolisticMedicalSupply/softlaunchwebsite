/**
 * Language Toggle System for Holistic Medical Supply
 * Handles multi-language switching with localStorage persistence
 */

(function() {
    'use strict';

    // Configuration
    const DEFAULT_LANGUAGE = 'en';
    const STORAGE_KEY = 'hms_language';
    const RTL_LANGUAGES = ['fa']; // Farsi uses right-to-left

    // Current language state
    let currentLanguage = DEFAULT_LANGUAGE;

    /**
     * Initialize the language system on page load
     */
    function init() {
        // Load saved language preference or use default
        currentLanguage = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;

        // Apply the language
        applyLanguage(currentLanguage);

        // Set up language selector dropdown
        setupLanguageSelector();

        console.log('Language system initialized. Current language:', currentLanguage);
    }

    /**
     * Set up the language selector dropdown event listeners
     */
    function setupLanguageSelector() {
        const selector = document.getElementById('language-selector');
        if (selector) {
            // Set current value
            selector.value = currentLanguage;

            // Listen for changes
            selector.addEventListener('change', function(e) {
                const newLanguage = e.target.value;
                switchLanguage(newLanguage);
            });
        }
    }

    /**
     * Switch to a new language
     * @param {string} langCode - Language code (en, ru, uz, fa, tg)
     */
    function switchLanguage(langCode) {
        if (!translations[langCode]) {
            console.error('Language not found:', langCode);
            return;
        }

        currentLanguage = langCode;

        // Save preference
        localStorage.setItem(STORAGE_KEY, langCode);

        // Apply the language
        applyLanguage(langCode);

        console.log('Switched to language:', langCode);
    }

    /**
     * Apply a language to all translatable elements
     * @param {string} langCode - Language code to apply
     */
    function applyLanguage(langCode) {
        const langData = translations[langCode];

        if (!langData) {
            console.error('Translation data not found for:', langCode);
            return;
        }

        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = langData[key];

            if (translation) {
                // Check if element has data-i18n-target attribute for specific property
                const target = element.getAttribute('data-i18n-target');

                if (target === 'placeholder') {
                    element.placeholder = translation;
                } else if (target === 'title') {
                    element.title = translation;
                } else if (target === 'value') {
                    element.value = translation;
                } else {
                    // Default: update innerHTML
                    element.innerHTML = translation;
                }
            } else if (langCode !== 'en') {
                // Fallback to English if translation missing
                const fallback = translations.en[key];
                if (fallback) {
                    element.innerHTML = fallback;
                    console.warn('Missing translation for key:', key, 'in language:', langCode);
                }
            }
        });

        // Handle RTL (Right-to-Left) for languages like Farsi
        handleTextDirection(langCode);

        // Update page title if applicable
        updatePageTitle(langCode);

        // Update the language selector to show current selection
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = langCode;
        }
    }

    /**
     * Handle text direction (LTR/RTL) based on language
     * @param {string} langCode - Language code
     */
    function handleTextDirection(langCode) {
        const html = document.documentElement;

        if (RTL_LANGUAGES.includes(langCode)) {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', langCode);
            document.body.classList.add('rtl-mode');
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', langCode);
            document.body.classList.remove('rtl-mode');
        }
    }

    /**
     * Update page title based on language
     * @param {string} langCode - Language code
     */
    function updatePageTitle(langCode) {
        const titleElement = document.querySelector('title');
        if (titleElement && titleElement.hasAttribute('data-i18n')) {
            const key = titleElement.getAttribute('data-i18n');
            const translation = translations[langCode][key];
            if (translation) {
                titleElement.textContent = translation;
            }
        }
    }

    /**
     * Get current language
     * @returns {string} Current language code
     */
    function getCurrentLanguage() {
        return currentLanguage;
    }

    /**
     * Get all available languages
     * @returns {Array} Array of language codes
     */
    function getAvailableLanguages() {
        return Object.keys(translations);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose API for external use (optional)
    window.LanguageToggle = {
        switchLanguage: switchLanguage,
        getCurrentLanguage: getCurrentLanguage,
        getAvailableLanguages: getAvailableLanguages
    };

})();
