function initTicker() {
    // Verifica si la librería Swiper está disponible
    if (typeof Swiper === 'undefined') {
        // Si no lo está, espera 100ms y vuelve a intentarlo
        setTimeout(initTicker, 100);
        return;
    }

    const isDesktop = () => window.innerWidth > 767.9;
    let gap = 30;
    const sliders = [];

    ["#horizontal-ticker-rtl", "#horizontal-ticker-ltr"].forEach(
        (query, index) => {
            const slider = new Swiper(query, {
                loop: true,
                slidesPerView: "auto",
                spaceBetween: gap,
                speed: 8000,
                allowTouchMove: false,
                autoplay: {
                    delay: 0,
                    reverseDirection: index === 0,
                    disableOnInteraction: false
                }
            });
            sliders.push(slider);
        }
    );
}

// Inicia el proceso de inicialización cuando el HTML está listo
document.addEventListener("DOMContentLoaded", initTicker);