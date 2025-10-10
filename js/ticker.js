document.addEventListener("DOMContentLoaded", () => {
    const isDesktop = () => window.innerWidth > 767.9;

    let gap = 30; // A fixed gap for simplicity

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
                    reverseDirection: index === 0, // RTL for the first one
                    disableOnInteraction: false
                }
            });
            sliders.push(slider);
        }
    );
});