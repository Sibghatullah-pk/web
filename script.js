// script.js

// Get random position on the screen for the sparkle
function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
}

// Create and display a sparkle
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    const { x, y } = getRandomPosition();
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    document.querySelector('.sparkles').appendChild(sparkle);

    // Remove sparkle after animation ends
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Celebrate function to trigger multiple sparkles
function celebrate() {
    const sparkleCount = 100;
    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(createSparkle, i * 20); // Staggered sparkles for better effect
    }
}
