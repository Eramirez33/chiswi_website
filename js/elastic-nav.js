document.addEventListener('DOMContentLoaded', () => {
    // Find all navigation containers that should have the elastic effect
    const navContainers = document.querySelectorAll('.elastic-nav');

    navContainers.forEach(navContainer => {
        const nav = navContainer.querySelector('ul');
        if (!nav) return;

        const items = nav.querySelectorAll('li a');
        let anim = null;
        let currentActiveItem = null;

        const animate = (from, to) => {
            if (anim) clearInterval(anim);

            const start = Date.now();
            anim = setInterval(() => {
                const p = Math.min((Date.now() - start) / 500, 1);
                const e = 1 - Math.pow(1 - p, 3);

                const x = from + (to - from) * e;
                const y = -40 * (4 * e * (1 - e));
                const r = 200 * Math.sin(p * Math.PI);

                nav.style.setProperty('--translate-x', `${x}px`);
                nav.style.setProperty('--translate-y', `${y}px`);
                nav.style.setProperty('--rotate-x', `${r}deg`);

                if (p >= 1) {
                    clearInterval(anim);
                    anim = null;
                    nav.style.setProperty('--translate-y', '0px');
                    nav.style.setProperty('--rotate-x', '0deg');
                }
            }, 16);
        };

        const getCurrentPosition = () => parseFloat(nav.style.getPropertyValue('--translate-x')) || 0;

        const getItemCenter = (item) => {
            return item.getBoundingClientRect().left + item.offsetWidth / 2 - nav.getBoundingClientRect().left - 5;
        };

        const moveToItem = (item) => {
            const current = getCurrentPosition();
            const center = getItemCenter(item);
            animate(current, center);
            nav.classList.add('show-indicator');
        };

        const setActiveItem = (item) => {
            if (currentActiveItem) {
                currentActiveItem.classList.remove('active');
            }

            currentActiveItem = item;
            item.classList.add('active');
            moveToItem(item);
        };

        const handleMouseLeave = () => {
            if (currentActiveItem) {
                moveToItem(currentActiveItem);
            } else {
                nav.classList.remove('show-indicator');
                if (anim) clearInterval(anim);
            }
        };

        items.forEach(item => {
            item.addEventListener('mouseenter', () => moveToItem(item));
            item.addEventListener('mouseleave', handleMouseLeave);
            item.addEventListener('click', (e) => {
                const targetUrl = new URL(item.href);
                const currentUrl = new URL(window.location.href);

                // Check if the target is on the same page
                if (targetUrl.pathname === currentUrl.pathname) {
                    e.preventDefault();
                    setActiveItem(item);
                    const targetId = targetUrl.hash;
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    // If it's a different page, let the default browser behavior handle it
                    // The browser will navigate to the new page and jump to the hash
                }
            });
        });

        nav.addEventListener('mouseleave', handleMouseLeave);
        
        // Set the first item as active by default, if it exists and we are on the main page
        if (items.length > 0 && (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/'))) {
            setTimeout(() => {
                // Check if another item is already active from another nav
                if (!document.querySelector('.elastic-nav .active')) {
                   setActiveItem(items[0]);
                }
            }, 100);
        }
    });
});