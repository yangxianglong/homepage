// Removed custom cursor for better usability

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add glowing effect to button
        const submitButton = this.querySelector('.submit-button');
        submitButton.style.animation = 'pulse 0.5s';
        
        // Show success message
        setTimeout(() => {
            alert('お問い合わせありがとうございます。担当者より折り返しご連絡させていただきます。');
            this.reset();
            submitButton.style.animation = '';
        }, 500);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Apply animation to elements
document.querySelectorAll('.product-card, .service-item, .section-title').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// CTA button loading animation
document.querySelector('.cta-button').addEventListener('click', function() {
    this.innerHTML = '<span style="display: inline-block; animation: spin 1s linear infinite;">⟳</span> Loading...';
    setTimeout(() => {
        this.innerHTML = 'カタログを見る';
        alert('カタログページは準備中です。お問い合わせフォームよりご請求ください。');
    }, 1500);
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.7); }
        70% { box-shadow: 0 0 0 20px rgba(0, 212, 255, 0); }
        100% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0); }
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// 3D tilt effect for product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Type writer effect for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Removed typewriter effect as we're using CSS animations

// Glitch effect on hover for logo
const logo = document.querySelector('.logo h1');
if (logo) {
    logo.addEventListener('mouseenter', () => {
        logo.style.animation = 'glitch 0.3s';
        setTimeout(() => {
            logo.style.animation = '';
        }, 300);
    });
}

// Add glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0%, 100% { text-shadow: 0 0 2px var(--primary-color); }
        20% { text-shadow: 2px 0 2px var(--accent-color), -2px 0 2px var(--primary-color); }
        40% { text-shadow: -2px 0 2px var(--accent-color), 2px 0 2px var(--primary-color); }
        60% { text-shadow: 0 2px 2px var(--primary-color), 0 -2px 2px var(--accent-color); }
        80% { text-shadow: 0 0 2px var(--primary-color); }
    }
`;
document.head.appendChild(glitchStyle);

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.nav-links-mobile');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.innerHTML = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.innerHTML = '☰';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.innerHTML = '☰';
    }
});