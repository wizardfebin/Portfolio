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
// Function to create fireflies
// function createFireflies() {
//     const container = document.querySelector('.firefly-container');

//     for (let i = 0; i < 10; i++) { // Create 10 fireflies
//         const firefly = document.createElement('div');
//         firefly.classList.add('firefly');

//         // Set random initial position
//         firefly.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
//         firefly.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        
//         // Random animation properties
//         firefly.style.animationDuration = (Math.random() * 2 + 1) + 's'; // Duration between 1s and 3s
//         firefly.style.animationDelay = Math.random() * 2 + 's'; // Delay between 0s and 2s

//         // Animate movement across the screen
//         animateFirefly(firefly);

//         container.appendChild(firefly);
//     }
// }

// // Function to animate firefly movement
// function animateFirefly(firefly) {
//     // Initial random position
//     const randomX = Math.random() * 100; // Random X target
//     const randomY = Math.random() * 100; // Random Y target
//     const animationDuration = (Math.random() * 5 + 2) + 's'; // Random duration for movement

//     // Set firefly to move to the random target position
//     firefly.animate([
//         { transform: 'translate(0, 0)' }, // Start position
//         { transform: `translate(${randomX/2}vw, ${randomY/2}vh)` } // End position
//     ],  {
//         duration: parseFloat(firefly.style.animationDuration) * 1000, // Convert to milliseconds
//         iterations: Infinity, // Repeat indefinitely
//         easing: 'ease-in-out' // Easing for smooth movement
//     });
// }



// // Update fireflies on scroll
// window.addEventListener('scroll', function () {
//     const fireflies = document.querySelectorAll('.firefly');
//     fireflies.forEach(firefly => {
//         const scrollY = window.scrollY; // Get scroll position
//         firefly.style.transform = `transla   teY(${scrollY}px)`; // Move fireflies down with scroll
//     });
// });

// // Call the function on page load
// window.onload = createFireflies;


// Theme toggle function
// function toggleNav() {
//     const body = document.body;
//     body.classList.toggle('light-theme'); // Toggle the light-theme class
//     const themeToggleButton = document.getElementById('theme-toggle');
//     themeToggleButton.textContent = body.classList.contains('light-theme') ? '🌙' : '☀️'; // Change button text
// }


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

