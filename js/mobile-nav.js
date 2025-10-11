document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const openMenu = () => {
        mobileMenu.classList.remove('hidden');
        // A small delay to allow the background to appear before the panel slides in
        setTimeout(() => {
            mobileMenu.classList.add('is-open');
        }, 10);
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('is-open');
        // Wait for the transition to finish before hiding the element
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300); // This should match the transition duration
    };

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', openMenu);
    }
    
    if (closeMobileMenuButton) {
        closeMobileMenuButton.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on the background overlay
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMenu();
            }
        });
    }

    // Close menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
