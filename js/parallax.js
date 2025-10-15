document.addEventListener('DOMContentLoaded', () => {
    const heroBgContainer = document.getElementById('hero-bg-container');

    if (heroBgContainer) {
        let ticking = false;

        const applyParallax = () => {
            const scrollY = window.scrollY;
            // Usamos un factor de 0.5 para que el fondo se mueva a la mitad de la velocidad del scroll
            // Esto crea el efecto de que está 'más lejos'
            heroBgContainer.style.transform = `translateY(${scrollY * 0.5}px)`;
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
