document.addEventListener('DOMContentLoaded', () => {
  const historiaSection = document.querySelector('#historia');
  const signaturePath = document.querySelector('#signature-path');

  if (!historiaSection || !signaturePath) {
    console.log('Elementos de la sección historia o firma no encontrados.');
    return;
  }

  // Configurar la animación de la firma
  const pathLength = signaturePath.getTotalLength();
  signaturePath.style.strokeDasharray = pathLength;
  signaturePath.style.strokeDashoffset = pathLength;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Añadir una clase para empezar la animación
        signaturePath.style.transition = 'stroke-dashoffset 2.5s ease-in-out';
        signaturePath.style.strokeDashoffset = '0';
        
        // Dejar de observar después de la animación
        observer.unobserve(historiaSection);
      }
    });
  }, { threshold: 0.5 }); // La animación se dispara cuando el 50% de la sección es visible

  observer.observe(historiaSection);
});