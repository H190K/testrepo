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

// Add floating particles for futuristic effect
function createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 5;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Random color
        const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        container.appendChild(particle);
    }
}

// Initialize
createParticles();
switchLanguage('en');
