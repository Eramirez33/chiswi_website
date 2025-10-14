gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // --- Animación para la sección "Nuestra Historia" ---
    const historiaSection = document.querySelector('#historia');
    if (historiaSection) {
        // Animar el texto desde la izquierda
        gsap.from("#historia-texto", {
            scrollTrigger: {
                trigger: "#historia",
                start: "top 80%", // La animación empieza cuando el 80% superior de la ventana llega a la sección
                toggleActions: "play none none none" // La animación solo se ejecuta una vez
            },
            x: -100, // Posición inicial: 100px a la izquierda
            opacity: 0, // Opacidad inicial: invisible
            duration: 1 // Duración de la animación: 1 segundo
        });

        // Animar la imagen desde la derecha
        gsap.from("#historia-imagen", {
            scrollTrigger: {
                trigger: "#historia",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            x: 100, // Posición inicial: 100px a la derecha
            opacity: 0,
            duration: 1
        });
    }

    // --- Animación para la sección "Paquetes Populares" ---
    const paquetesSection = document.querySelector('#paquetes');
    if (paquetesSection) {
        gsap.from("#paquetes .grid > div", {
            scrollTrigger: {
                trigger: "#paquetes",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2 // Anima cada paquete con 0.2s de diferencia
        });
    }

    // --- Animación para la sección "FAQ" ---
    const faqSection = document.querySelector('#faq');
    if (faqSection) {
        const faqItems = document.querySelectorAll("#faq .grid > div");
        faqItems.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none"
                },
                x: (index % 2 === 0) ? -100 : 100, // Alternar dirección
                opacity: 0,
                duration: 0.8
            });
        });
    }

    // --- Animación para la sección "Precio" (Cotización) ---
    const precioSection = document.querySelector('#precio');
    if (precioSection) {
        // Animar texto desde la izquierda
        gsap.from("#precio .grid > div:first-child", {
            scrollTrigger: {
                trigger: "#precio",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            x: -100,
            opacity: 0,
            duration: 1
        });

        // Animar tarjeta desde la derecha
        gsap.from("#precio .grid > div:last-child", {
            scrollTrigger: {
                trigger: "#precio",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            x: 100,
            opacity: 0,
            duration: 1
        });
    }
});