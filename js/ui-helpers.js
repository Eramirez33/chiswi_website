document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el Banner de Campaña ---
    const campaignBanner = document.getElementById('campaign-banner');
    const closeCampaignBannerBtn = document.getElementById('close-campaign-banner');

    if (typeof campaignConfig !== 'undefined' && campaignConfig.enabled) {
        // Construir el contenido del banner desde el objeto de configuración
        const campaignContent = `${campaignConfig.text} <a href="#" onclick="enviarWhatsApp('${campaignConfig.ctaSubject}'); return false;" class="underline hover:text-black">${campaignConfig.ctaText}</a>`;
        
        // Poblar todos los contenedores de texto de la marquesina
        const textContainers = document.querySelectorAll('.campaign-text-container');
        textContainers.forEach(container => {
            container.innerHTML = campaignContent;
        });

        // Lógica para mostrar/ocultar basado en la sesión
        if (campaignBanner && closeCampaignBannerBtn) {
            if (sessionStorage.getItem('campaignBannerClosed') === 'true') {
                campaignBanner.classList.add('is-hidden');
            } else {
                campaignBanner.classList.remove('is-hidden');
            }

            // Acción del botón de cierre
            closeCampaignBannerBtn.addEventListener('click', () => {
                campaignBanner.classList.add('hidden'); // Inicia la transición
                sessionStorage.setItem('campaignBannerClosed', 'true');
                
                campaignBanner.addEventListener('transitionend', () => {
                    campaignBanner.classList.add('is-hidden');
                }, { once: true });
            });
        }
    } else if (campaignBanner) {
        // Si la campaña está desactivada, asegurarse de que el banner esté oculto
        campaignBanner.classList.add('is-hidden');
    }


    // --- Lógica para el Botón "Volver Arriba" ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});