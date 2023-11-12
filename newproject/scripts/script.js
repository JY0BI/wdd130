const translations = [         // English
    "Señor Ellington",         // Spanish
    "エリントン・先生",      // Japanese
    "Herr Ellington",          // German
    "Mr. Ellington",
    "Jordan Ellington",
    // ... add as many translations as you want
];

let index = 0;

let isAnimating = false;

function changeLanguageText() {
    if (isAnimating) {
        return; // Exit the function if an animation is currently running
    }

    isAnimating = true; // Set the flag to indicate that an animation is running

    const languageTextElement = document.getElementById('languageText');
    languageTextElement.classList.add('fade-out-name');

    setTimeout(() => {
        languageTextElement.textContent = translations[index];
        index = (index + 1) % translations.length;

        // Clear old animations and apply the fade-in effect
        languageTextElement.classList.remove('fade-out-name');
        languageTextElement.classList.add('fade-in-name');

        // After fade-in completes, remove the class and reset the flag
        setTimeout(() => {
            languageTextElement.classList.remove('fade-in-name');
            isAnimating = false; // Reset the flag after the animation completes
        }, 1000);
    }, 1000);
}

// At the end of your script, add:
document.getElementById('languageText').addEventListener('click', changeLanguageText);

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log('Link clicked');
        e.preventDefault(); // Prevent the default link behavior
        const href = link.getAttribute('href');

        // Play the fade-out animation
        overlay.classList.add('fade-in');

        // Navigate to the link after the animation is completed
        setTimeout(() => {
            window.location.href = href;
        }, 700); // Assuming the animation duration is 1s (1000ms)
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Create the overlay div and append it to the body
    const overlay = document.getElementById('page-transition-overlay');

    // Add the fade-in effect when the page loads
    window.addEventListener('load', function() {
        overlay.classList.remove('fade-in'); // Instead of adding, you'll remove the fade-in class
    
        setTimeout(() => {
            overlay.style.pointerEvents = 'none'; // Ensure it doesn't interfere with any interactions
        }, 2000); // Assuming the animation duration is 1s (1000ms)
    });

    // Add the fade-out effect for all anchor tags
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Link clicked');
            e.preventDefault(); // Prevent the default link behavior
            const href = link.getAttribute('href');

            // Play the fade-out animation
            overlay.classList.add('fade-in');

            // Navigate to the link after the animation is completed
            setTimeout(() => {
                window.location.href = href;
            }, 2000); // Assuming the animation duration is 1s (1000ms)
        });
    });

});