document.addEventListener('DOMContentLoaded', () => {
    const parallaxBg = document.querySelector('.hero-section .hero-bg-container');

    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            // Apply a vertical transform at 50% of the scroll speed
            // This makes the background move slower, creating the parallax effect.
            parallaxBg.style.transform = `translateY(${scrollY * 0.5}px)`;
        });
    }
});