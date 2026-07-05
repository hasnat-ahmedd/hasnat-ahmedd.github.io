// ===================================
// SMOOTH SCROLLING & NAVIGATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll on nav link click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// ===================================
// THEME SWITCHER - WITH BACKGROUNDS
// ===================================
const themeConfig = {
    themes: [
        {
            name: 'Default (Indigo & Pink)',
            colors: {
                primary: '#6366f1',
                secondary: '#ec4899',
                accent: '#10b981',
                bgPrimary: '#ffffff',
                bgSecondary: '#f8fafc',
                bgTertiary: '#f1f5f9',
            }
        },
        {
            name: 'Ocean (Blue & Cyan)',
            colors: {
                primary: '#0ea5e9',
                secondary: '#06b6d4',
                accent: '#14b8a6',
                bgPrimary: '#f0f9ff',
                bgSecondary: '#e0f2fe',
                bgTertiary: '#cffafe',
            }
        },
        {
            name: 'Sunset (Orange & Red)',
            colors: {
                primary: '#f97316',
                secondary: '#ef4444',
                accent: '#eab308',
                bgPrimary: '#fef3c7',
                bgSecondary: '#fee2e2',
                bgTertiary: '#fecaca',
            }
        },
        {
            name: 'Forest (Green & Teal)',
            colors: {
                primary: '#059669',
                secondary: '#0d9488',
                accent: '#7c3aed',
                bgPrimary: '#ecfdf5',
                bgSecondary: '#d1fae5',
                bgTertiary: '#a7f3d0',
            }
        },
        {
            name: 'Purple Dreams',
            colors: {
                primary: '#9333ea',
                secondary: '#ec4899',
                accent: '#06b6d4',
                bgPrimary: '#faf5ff',
                bgSecondary: '#f3e8ff',
                bgTertiary: '#e9d5ff',
            }
        },
        {
            name: 'Midnight (Dark Blue)',
            colors: {
                primary: '#1e40af',
                secondary: '#7c3aed',
                accent: '#0891b2',
                bgPrimary: '#0c1929',
                bgSecondary: '#1a2942',
                bgTertiary: '#27395b',
            }
        },
        {
            name: 'Coral Dream',
            colors: {
                primary: '#ff6b6b',
                secondary: '#ff922b',
                accent: '#fd7e14',
                bgPrimary: '#fff5f5',
                bgSecondary: '#ffe0cc',
                bgTertiary: '#ffc9a3',
            }
        },
        {
            name: 'Mint Fresh',
            colors: {
                primary: '#20c997',
                secondary: '#51cf66',
                accent: '#82c91e',
                bgPrimary: '#f1f8f4',
                bgSecondary: '#d3f9d8',
                bgTertiary: '#b2f2bb',
            }
        }
    ],
    currentTheme: 0
};

// Initialize theme button
function initThemeButton() {
    // Create theme button if it doesn't exist
    if (!document.querySelector('.theme-switcher')) {
        const themeButton = document.createElement('button');
        themeButton.className = 'theme-switcher';
        themeButton.innerHTML = '<i class="fas fa-palette"></i>';
        themeButton.title = 'Switch Theme';
        document.body.appendChild(themeButton);

        // Add theme menu
        const themeMenu = document.createElement('div');
        themeMenu.className = 'theme-menu';
        
        themeConfig.themes.forEach((theme, index) => {
            const themeOption = document.createElement('button');
            themeOption.className = 'theme-option';
            themeOption.innerHTML = `
                <span class="theme-colors">
                    <span class="color-dot" style="background-color: ${theme.colors.primary}"></span>
                    <span class="color-dot" style="background-color: ${theme.colors.secondary}"></span>
                    <span class="color-dot" style="background-color: ${theme.colors.accent}"></span>
                    <span class="color-dot" style="background-color: ${theme.colors.bgSecondary}; border: 1px solid #ccc;"></span>
                </span>
                <span class="theme-name">${theme.name}</span>
            `;
            themeOption.addEventListener('click', () => {
                applyTheme(index);
                themeMenu.classList.remove('active');
            });
            themeMenu.appendChild(themeOption);
        });

        document.body.appendChild(themeMenu);

        // Toggle menu on button click
        themeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            themeMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', () => {
            themeMenu.classList.remove('active');
        });
    }
}

// Apply theme
function applyTheme(themeIndex) {
    const theme = themeConfig.themes[themeIndex];
    const root = document.documentElement;
    
    // Set CSS variables for colors
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--secondary', theme.colors.secondary);
    root.style.setProperty('--accent', theme.colors.accent);
    
    // Set CSS variables for backgrounds
    root.style.setProperty('--bg-primary', theme.colors.bgPrimary);
    root.style.setProperty('--bg-secondary', theme.colors.bgSecondary);
    root.style.setProperty('--bg-tertiary', theme.colors.bgTertiary);
    
    // Save to localStorage
    localStorage.setItem('selectedTheme', themeIndex);
    localStorage.setItem('themeColors', JSON.stringify(theme.colors));
    
    themeConfig.currentTheme = themeIndex;
    
    // Show notification
    showThemeNotification(theme.name);
}

// Show theme change notification
function showThemeNotification(themeName) {
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> Theme changed to: ${themeName}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Load saved theme on page load
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme !== null) {
        applyTheme(parseInt(savedTheme));
    }
}

// Initialize theme on page load
window.addEventListener('load', () => {
    loadSavedTheme();
    initThemeButton();
});

// ===================================
// FORM SUBMISSION
// ===================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        // Reset form
        contactForm.reset();
        
        // Restore button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// PARALLAX EFFECT
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-parallax') || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// TYPING ANIMATION FOR HERO
// ===================================
const roles = ['Full Stack Developer', 'Data Analyst', 'UI/UX Designer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (!heroSubtitle) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    
    heroSubtitle.textContent = currentRole.substring(0, charIndex);
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeRole, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeRole, speed);
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    // Uncomment line below to enable typing animation
    // typeRole();
});

// ===================================
// CURSOR TRACKING EFFECT
// ===================================
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Apply subtle glow effect to hero section
    const hero = document.querySelector('.hero');
    if (hero && window.scrollY < window.innerHeight) {
        hero.style.background = `radial-gradient(
            circle at ${mouseX * 100}% ${mouseY * 100}%, 
            rgba(99, 102, 241, 0.1) 0%, 
            transparent 50%
        ), linear-gradient(135deg, var(--bg-secondary) 0%, #f0f4ff 100%)`;
    }
});

// ===================================
// COUNTER ANIMATION FOR STATS
// ===================================
const animateCounter = (element) => {
    const target = parseInt(element.textContent);
    const increment = target / 30;
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target === 100 ? '%' : '+');
        }
    };

    updateCounter();
};

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const stats = entry.target.querySelectorAll('.stat h3');
            stats.forEach(stat => animateCounter(stat));
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about-stats');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// ===================================
// SMOOTH PAGE TRANSITIONS
// ===================================
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0.5';
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});

// ===================================
// ACCESSIBILITY IMPROVEMENTS
// ===================================
// Keyboard navigation for menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }
        const themeMenu = document.querySelector('.theme-menu');
        if (themeMenu) {
            themeMenu.classList.remove('active');
        }
    }
});

// ===================================
// LAZY LOADING FOR IMAGES
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Throttle scroll events
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            // Update active nav on scroll
            ticking = false;
        });
        ticking = true;
    }
});

console.log('Portfolio website loaded successfully! 🚀');
console.log('Theme system active - 8 beautiful themes with full background colors!');
console.log('Click the palette button to explore all color schemes!');
