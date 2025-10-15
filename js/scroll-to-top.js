document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    if (!scrollToTopButton) return;

    // Mostrar/ocultar el botón basado en el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Muestra el botón después de 300px de scroll
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Scroll suave hacia arriba al hacer clic
    scrollToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});