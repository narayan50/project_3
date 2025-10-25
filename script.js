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
    }); // <-- The closing brace for the forEach loop was missing an element
        //     but the main issue is the missing closing brace for handleScroll itself.
        //     I've checked the forEach and it appears to have its closing brace.
        //     The missing brace is for handleScroll().
    
}; // <--- THIS CLOSING BRACE WAS MISSING
// The code in the prompt was:
// ...
//        
// }; <--- This was the closing brace for the sections.forEach() callback function.
//
// The missing closing brace for the handleScroll function should be placed here.


// 3. ATTACH THE SINGLE, COMBINED FUNCTION TO THE SCROLL EVENT
document.addEventListener('DOMContentLoaded', () => {
    // Attach the combined scroll handler
    window.addEventListener('scroll', handleScroll);
    
    // Run the function once on load to set the initial state (especially for navbar)
    handleScroll();
});

// REMOVE THESE! They are no longer needed as they are combined above.
/*
function CheckScroll(){ ... }
document.addEventListener('DOMContentLoaded', () => { ... }
*/