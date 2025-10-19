document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el Banner de Campaña ---
    const campaignBanner = document.getElementById('campaign-banner');
    const closeCampaignBannerBtn = document.getElementById('close-campaign-banner');
    const topInfoBar = document.getElementById('top-info-bar');
    const header = document.querySelector('header');

    const adjustLayout = () => {
        const topBarHeight = (topInfoBar && window.getComputedStyle(topInfoBar).display !== 'none') ? topInfoBar.offsetHeight : 0;
        let totalOffset = topBarHeight;

        if (campaignBanner && !campaignBanner.classList.contains('is-hidden')) {
            // Si el banner está visible, lo posicionamos debajo del top-bar
            campaignBanner.style.top = `${topBarHeight}px`;
            const bannerHeight = campaignBanner.offsetHeight;
            totalOffset += bannerHeight;
        }
        
        // Ajustamos el header principal para que se ubique debajo de todo
        if (header) {
            header.style.transform = `translateY(${totalOffset}px)`;
        }
    };

    if (typeof campaignConfig !== 'undefined' && campaignConfig.enabled && campaignBanner) {
        // 1. Poblar el contenido del banner
        const campaignContent = `${campaignConfig.text} <a href="#" onclick="enviarWhatsApp('${campaignConfig.ctaSubject}'); return false;" class="underline hover:text-black">${campaignConfig.ctaText}</a>`;
        document.querySelectorAll('.campaign-text-container').forEach(container => {
            container.innerHTML = campaignContent;
        });

        // 2. Decidir si mostrar u ocultar el banner basado en la sesión
        if (sessionStorage.getItem('campaignBannerClosed') === 'true') {
            campaignBanner.classList.add('is-hidden');
        } else {
            campaignBanner.classList.remove('is-hidden');
        }

        // 3. Ajustar el layout inicial
        setTimeout(adjustLayout, 100); // Un timeout para asegurar que las alturas se calculen correctamente

        // 4. Lógica del botón de cierre
        if (closeCampaignBannerBtn) {
            closeCampaignBannerBtn.addEventListener('click', () => {
                campaignBanner.classList.add('is-hidden');
                sessionStorage.setItem('campaignBannerClosed', 'true');
                adjustLayout(); // Re-ajustar el layout al cerrar
            });
        }
        
        // 5. Re-ajustar en caso de que cambie el tamaño de la ventana
        window.addEventListener('resize', adjustLayout, { passive: true });
    }


    // --- Lógica para el Botón "Volver Arriba" ---
    const backToTopButton = document.getElementById('scrollToTopButton');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }, { passive: true });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Lógica para el Top Info Bar ---
    window.addEventListener('scroll', () => {
        const topInfoBar = document.getElementById('top-info-bar');
        if (topInfoBar) {
            if (window.scrollY > 50) {
                topInfoBar.classList.add('scrolled');
            } else {
                topInfoBar.classList.remove('scrolled');
            }
        }
    }, { passive: true });

});