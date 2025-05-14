// Language content
const content = {
    en: {
        title: "Coming Soon",
        message: "Our website is still under development",
        button: "Visit h190k.com"
    },
    ar: {
        title: "قريباً",
        message: "موقعنا لا يزال قيد التطوير",
        button: "زيارة h190k.com"
    }
};

// DOM Elements
const container = document.getElementById('container');
const title = document.querySelector('.title');
const message = document.querySelector('.message');
const btn = document.querySelector('.btn');
const enBtn = document.getElementById('en-btn');
const arBtn = document.getElementById('ar-btn');

// Language switching
function switchLanguage(lang) {
    // Update content
    title.textContent = content[lang].title;
    message.textContent = content[lang].message;
    btn.textContent = content[lang].button;
    
    // Update direction for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    }
    
    // Update active button
    enBtn.classList.toggle('active', lang === 'en');
    arBtn.classList.toggle('active', lang === 'ar');
}

// Event listeners
enBtn.addEventListener('click', () => switchLanguage('en'));
arBtn.addEventListener('click', () => switchLanguage('ar'));

// Initialize
switchLanguage('en');
