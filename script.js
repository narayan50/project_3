// 1. SELECT ELEMENTS OUTSIDE THE LISTENERS
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('.container, .container-two');


// 2. DEFINE THE MAIN SCROLL CHECK FUNCTION (COMBINING ALL LOGIC)
const handleScroll = () => {
    // A. NAVBAR LOGIC --------------------------------------------------------
    // window.scrollY is the vertical distance scrolled from the top of the page.
    if (window.scrollY > 1) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    
    // B. SECTION ANIMATION LOGIC ---------------------------------------------
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.85; // Trigger when section top is 85% up the screen

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerPoint) {
            // Check if the animation class is NOT present before adding it
            if (!section.classList.contains('animate-in')) {
                section.classList.add('animate-in');
            }
        }
    });
};

// 3. ATTACH THE SINGLE, COMBINED FUNCTION TO THE SCROLL EVENT
document.addEventListener('DOMContentLoaded', () => {
    // Attach the combined scroll handler
    window.addEventListener('scroll', handleScroll);
    
    // Run the function once on load to set the initial state (especially for navbar)
    handleScroll();
});

//animation for text-box on scroll

window.addEventListener('scroll', function() 
{
    const elements = document.querySelectorAll('.text-box, .text-box-two, .text-box-three, .text-box-four');
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});
