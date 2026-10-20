// Current Language State Engine
let currentLang = 'km';

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');
const contactForm = document.getElementById('contact-form');
const faqQuestions = document.querySelectorAll('.faq-question');

// Language Switcher Function
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'km' ? 'en' : 'km';
    langText.textContent = currentLang === 'km' ? 'English' : 'ភាសាខ្មែរ';
    
    updateStaticTranslations();
});

function updateStaticTranslations() {
    document.querySelectorAll('[data-km]').forEach(elem => {
        const text = elem.getAttribute(`data-${currentLang}`);
        if (text) elem.innerHTML = text;
    });
}

// Contact Form Handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value;
    
    alert(currentLang === 'km' 
        ? `សូមអរគុណ ${name}! សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ។ ក្រុមការងារយើងខ្ញុំនឹងទាក់ទងទៅវិញក្នុងពេលឆាប់ៗ។` 
        : `Thank you ${name}! Your message has been sent successfully. Our team will contact you shortly.`);

    contactForm.reset();
});

// FAQ Accordion Toggle Logic
faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        item.classList.toggle('active');
    });
});

// Initial Setup
updateStaticTranslations();
