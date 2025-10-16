document.addEventListener('DOMContentLoaded', () => {
    // Registrar los plugins de GSAP que vamos a usar
    gsap.registerPlugin(ScrollTrigger);

    console.log("GSAP y ScrollTrigger cargados correctamente.");

    // --- ANIMACIÓN 1: HERO SECTION ---
    // Anima los textos del hero para que se desvanezcan hacia arriba al hacer scroll
    gsap.to(".hero-content", {
        y: "-200px",
        opacity: 0,
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top", // La animación empieza cuando el top del hero está en el top de la ventana
            end: "bottom center", // La animación termina cuando el fondo del hero llega al centro
            scrub: 1, // Suaviza la animación al hacer scroll
        }
    });

    // --- ANIMACIÓN 2: FIJADO DE LA SECCIÓN "NUESTRA HISTORIA" ---
    // Fija la sección en la pantalla durante un recorrido de scroll determinado
    ScrollTrigger.create({
        trigger: "#historia-container", // Un contenedor que envuelve la sección
        start: "top top",
        end: "+=100%", // Fija la sección por el equivalente al 100% de la altura de la ventana
        pin: true,
        pinSpacing: true, // Añade un espacio para que el contenido siguiente no se solape bruscamente
    });

    // --- ANIMACIÓN 3: EFECTO PARALLAX DENTRO DE "NUESTRA HISTORIA" ---
    // Mueve la imagen y el texto a diferentes velocidades para crear profundidad
    gsap.to("#historia-imagen", {
        y: "-50%", // Mueve la imagen hacia arriba más lento que el scroll
        ease: "none",
        scrollTrigger: {
            trigger: "#historia-container",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.from("#historia-texto", {
        y: "50%", // El texto empieza un poco más abajo
        ease: "none",
        scrollTrigger: {
            trigger: "#historia-container",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

});
