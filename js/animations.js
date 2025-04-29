// animations.js (continued from previous part)
/////////////////////////////////////////////////
// Динамічні елементи фону
function createDynamicElements() {
    const container = document.getElementById('dynamicElements');
    if (!container) return;

    const colors = ['#6c5ce7', '#a29bfe', '#fd79a8', '#00cec9'];
    
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.classList.add('dynamic-element');
        
        const type = Math.random() > 0.5 ? 'circle' : 
                     Math.random() > 0.5 ? 'triangle' : 'line';
        element.classList.add(type);
        
        // Рандомні параметри
        const size = Math.random() * 100 + 20;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = Math.random() * 0.4 + 0.1;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        element.style.width = `${size}px`;
        element.style.height = type === 'circle' ? `${size}px` : 
                              type === 'triangle' ? '0' : '2px';
        element.style.left = `${left}vw`;
        element.style.top = `${top}vh`;
        element.style.opacity = opacity;
        element.style.animationDelay = `${delay}s`;
        element.style.animationDuration = `${duration}s`;
        
        if (type === 'triangle') {
            const direction = Math.random() > 0.5 ? 'left' : 'right';
            const borderWidth = size / 2;
            element.style.borderWidth = `0 ${direction === 'left' ? borderWidth : 0}px ${size}px ${direction === 'right' ? borderWidth : 0}px`;
            element.style.borderColor = `transparent transparent ${color} transparent`;
        } else if (type === 'line') {
            element.style.width = `${size * 3}px`;
            element.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`;
        } else {
            element.style.background = color;
        }
        
        container.appendChild(element);
    }
}

// Анімація обертання
function createRotatingAnimation() {
    const container = document.getElementById('rotatingAnimation');
    if (!container) return;

    const colors = ['#6c5ce7', '#a29bfe', '#fd79a8', '#00cec9', '#55efc4'];
    
    for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div');
        circle.classList.add('rotating-circle');
        
        const size = Math.random() * 200 + 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.background = color;
        circle.style.left = `${left}%`;
        circle.style.top = `${top}%`;
        circle.style.animationDuration = `${duration}s`;
        circle.style.animationDelay = `-${delay}s`;
        
        container.appendChild(circle);
    }
}

// Паралакс-ефект для фото
function setupParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const floatingImg = document.querySelector('.floating-img');
        if (floatingImg) {
            floatingImg.style.transform = 
                `translateY(${scrolled * 0.1}px) rotate(${scrolled * 0.2}deg)`;
        }
    });
}

// Анімація тексту
function animateText() {
    const titles = document.querySelectorAll('h1, h2, h3');
    
    titles.forEach(title => {
        let letters = title.textContent.split('');
        title.textContent = '';
        
        letters.forEach((letter, i) => {
            let span = document.createElement('span');
            span.textContent = letter;
            span.style.animation = `textFloat 0.5s ease ${i/10}s forwards`;
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            title.appendChild(span);
        });
    });
}

// Ініціалізація всіх анімацій
function initAnimations() {
    createDynamicElements();
    createRotatingAnimation();
    setupParallax();
    animateText();
}

// Експорт функцій для використання в інших файлах
export {
    createDynamicElements,
    createRotatingAnimation,
    setupParallax,
    animateText,
    initAnimations
};

// Викликаємо ініціалізацію при завантаженні
document.addEventListener('DOMContentLoaded', initAnimations);
