document.addEventListener('DOMContentLoaded', () => {
    // Solo ejecutar en pantallas móviles
    if (window.matchMedia("(max-width: 768px)").matches) {
        const steps = document.querySelectorAll('#proceso .scrolling-process-list li');

        if (steps.length === 0) return;

        const observerOptions = {
            root: null, // usa el viewport
            rootMargin: '0px',
            threshold: 0.2 // El 20% del item debe ser visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opcional: dejar de observar el elemento una vez que es visible
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        steps.forEach(step => {
            observer.observe(step);
        });
    }
});
