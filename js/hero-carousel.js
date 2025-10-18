document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.getElementById('hero-bg-container');
    if (!heroContainer) return;

    const images = heroContainer.querySelectorAll('.hero-bg-image');
    const imageCount = images.length;

    if (imageCount <= 1) return; // Don't run animation if there's only one image or none

    // 1. Set the --hero-img-count CSS variable on the container itself.
    heroContainer.style.setProperty('--hero-img-count', imageCount);

    // 2. Calculate keyframe percentages for a sharp cut
    const slicePercentage = 100 / imageCount;
    const endOfVisibility = slicePercentage - 0.01;

    // 3. Generate the dynamic keyframes rule
    const keyframes = `
        @keyframes hero-slideshow-ken-burns {
            0% {
                opacity: 1;
                transform: scale(1.12);
            }
            ${endOfVisibility}% {
                opacity: 1;
                transform: scale(1.01);
            }
            ${slicePercentage}% {
                opacity: 0;
                transform: scale(1.01);
            }
            100% {
                opacity: 0;
                transform: scale(1);
            }
        }
    `;

    // 4. Create a <style> element and inject the keyframes into the <head>
    const styleElement = document.createElement('style');
    styleElement.id = 'hero-carousel-dynamic-styles'; // Add an ID for easy identification
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);
});
