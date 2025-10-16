document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('.parallax-element');

    if (parallaxElements.length > 0) {
        let ticking = false;

        const applyParallax = () => {
            const scrollY = window.scrollY;

            parallaxElements.forEach(element => {
                const speed = parseFloat(element.dataset.parallaxSpeed || 0.5);
                element.style.transform = `translateY(${scrollY * speed}px)`;
            });

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(applyParallax);
                ticking = true;
            }
        });
    }
});