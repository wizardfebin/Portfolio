const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check the current theme from localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
}

// Event listener for the toggle button
toggleButton.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');

    // Toggle theme
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleButton.innerHTML = "🌙"; // Sun icon for light mode
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleButton.innerHTML = "🌞"; // Moon icon for dark mode
    }
});

// Function to animate skill boxes
// Function to animate skill boxes
// Function to animate skill boxes
const skillBoxes = document.querySelectorAll('.skill-box');

// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Reset visibility for animation
            skillBoxes.forEach(box => {
                box.classList.remove('visible'); // Remove the visible class
                box.style.opacity = '0'; // Set opacity back to 0
            });

            // Add the 'visible' class to skill boxes with a staggered effect
            skillBoxes.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add('visible');
                    box.style.opacity = '1'; // Set opacity to 1 for visibility
                }, index * 200); // Staggered animation
            });
        }
    });
});

// Observe the skill container
const skillContainer = document.querySelector('.skill-container');
observer.observe(skillContainer);



// JavaScript to change navbar style on scroll
window.onscroll = function() {
    const navbar = document.querySelector("nav");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("sticky"); // Add sticky class when scrolling
    } else {
        navbar.classList.remove("sticky"); // Remove sticky class when at the top
    }
};

function toggleNav() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active'); // Toggle the active class to show/hide
}

