document.addEventListener('DOMContentLoaded', () => {
  // Animación de la Firma
  const historiaSection = document.querySelector('#historia');
  const signaturePath = document.querySelector('#signature-path');

  if (historiaSection && signaturePath) {
    const pathLength = signaturePath.getTotalLength();
    signaturePath.style.strokeDasharray = pathLength;
    signaturePath.style.strokeDashoffset = pathLength;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          signaturePath.style.transition = 'stroke-dashoffset 2.5s ease-in-out';
          signaturePath.style.strokeDashoffset = '0';
          observer.unobserve(historiaSection);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(historiaSection);
  }

  // Lógica para el slideshow
  const slideshow = document.querySelector('#historia-slideshow');
  if (slideshow) {
    const slides = slideshow.querySelectorAll('.historia-slide');
    if (slides.length > 0) {
        let currentSlide = 0;

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Cambia de imagen cada 5 segundos
    }
  }

  // Lógica para el tooltip de CEDEL
  const cedelTrigger = document.querySelector('.cedel-tooltip-trigger');
  if (cedelTrigger) {
      const tooltip = cedelTrigger.nextElementSibling;
      cedelTrigger.addEventListener('click', (e) => {
          e.preventDefault();
          tooltip.classList.toggle('active');
      });

      // Opcional: cerrar el tooltip si se hace clic fuera de él
      document.addEventListener('click', (e) => {
          if (!cedelTrigger.contains(e.target) && !tooltip.contains(e.target)) {
              tooltip.classList.remove('active');
          }
      });
  }
});