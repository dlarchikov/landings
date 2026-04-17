// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const currentLang = localStorage.getItem('preferredLang') || 'ru';
    
    // Set initial language
    switchLanguage(currentLang);
    setActiveButton(currentLang);
    
    // Add click event to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            setActiveButton(lang);
            localStorage.setItem('preferredLang', lang);
        });
    });
    
    function switchLanguage(lang) {
        // Hide all language-specific elements
        document.querySelectorAll('.lang-ru, .lang-en').forEach(el => {
            el.style.display = 'none';
        });
        
        // Show elements for selected language
        document.querySelectorAll(`.lang-${lang}`).forEach(el => {
            el.style.display = '';
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
    
    function setActiveButton(lang) {
        langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});