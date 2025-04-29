// Основні функції
document.addEventListener('DOMContentLoaded', function() {
    // Ініціалізація теми
    initTheme();
    
    // Плавний скрол
    setupSmoothScroll();
    
    // Ініціалізація анімацій
    initAnimations();
});

// Функція для ініціалізації теми
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Перевірка збереженої теми
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.querySelector('i').classList.add('fa-sun');
        themeToggle.querySelector('i').classList.remove('fa-moon');
    }

    // Обробник кліку для перемикача теми
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Функція для плавного скролу
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Функція для ініціалізації анімацій
function initAnimations() {
    // Анімація завантаження
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loader = document.getElementById('loader');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 500);
            }
        }, 1000);
    });

    // Анімація навичок
    window.addEventListener('scroll', animateSkills);
}

// Анімація навичок
function animateSkills() {
    document.querySelectorAll('.skill-item').forEach(item => {
        if (isElementInViewport(item)) {
            const percent = item.getAttribute('data-percent');
            item.querySelector('.skill-progress').style.width = `${percent}%`;
        }
    });
}

// Перевірка видимості елемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}
