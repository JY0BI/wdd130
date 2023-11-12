const translations = [
    "Mr. Ellington",         // English
    "Señor Ellington",         // Spanish
    "エリントン・先生",      // Japanese
    "Herr Ellington",          // German
    // ... add as many translations as you want
];

let index = 1;

function changeLanguageText() {
    const languageTextElement = document.getElementById('languageText');
    languageTextElement.classList.add('fade-out');

    setTimeout(() => {
        languageTextElement.textContent = translations[index];
        index = (index + 1) % translations.length;

        // Clear old animations and apply the fade-in effect
        languageTextElement.classList.remove('fade-out');
        languageTextElement.classList.add('fade-in');

        // After fade-in completes, remove the class so it can be reapplied next time
        setTimeout(() => {
            languageTextElement.classList.remove('fade-in');
        }, 2000);
    }, 2000);
}
// This will immediately start the changeLanguageText function once upon page load

// Change the text every 3 seconds (3000 milliseconds)
setTimeout(() => {
    changeLanguageText();  // Call the function once after 3 seconds

    // Then continue to call it every 6 seconds thereafter
    setInterval(changeLanguageText, 5000);
}, 3000);
