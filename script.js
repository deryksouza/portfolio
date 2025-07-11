// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
function toggleMenu() {
    const navigation = document.querySelector('.navigation');
    const burger = document.querySelector('.fancy-burger');
    const rectangles = burger.querySelectorAll('.rectangle');
    
    navigation.classList.toggle('active');
    
    rectangles.forEach(rect => {
        rect.classList.toggle('open');
    });
}

// Spin effect for title
function spin() {
    const title = document.querySelector('.banner h1');
    title.style.transform = 'rotate(360deg)';
    title.style.transition = 'transform 0.5s ease';
    
    setTimeout(() => {
        title.style.transform = 'rotate(0deg)';
    }, 500);
}

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'flex';
    }
    
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

// Auto slideshow
setInterval(() => {
    plusSlides(1);
}, 6000);

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !subject || !message) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Create email link
            const emailBody = `Nome: ${name}%0AEmail: ${email}%0A%0AMensagem:%0A${message}`;
            const emailLink = `mailto:kelleysonderyk@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
            
            // Open email client
            window.open(emailLink, '_blank');
            
            // Show success message
            alert('Redirecionando para seu cliente de email...');
            
            // Reset form
            this.reset();
        });
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}

function initAnimations() {
    // Observe elements for animation
    document.querySelectorAll('.icons-container, .mySlides, .about, .contact').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}