// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });
}

// Function to fetch language data
async function fetchLanguageData(lang) {
    const response = await fetch(`/assets/json/${lang}.json`);
    return response.json();
}

// Function to change language and update content
async function changeLanguage(lang) {
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
    toggleGermanStylesheet(lang);
}

// Function to initialize and apply language settings
async function initializeLanguage() {
    // Use browser language as the primary option, fallback to 'de'
    const userPreferredLanguage = navigator.language.split('-')[0] || 'de';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
}

// Call initializeLanguage() on page load
window.addEventListener('DOMContentLoaded', initializeLanguage);
