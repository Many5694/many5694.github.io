/**
 * Portfolio Interactive Logic
 * Manuel Meléndez-Negrón - Senior QA Automation
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth Scroll: Navegación fluida entre secciones
  const setupSmoothScroll = () => {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Offset por el nav fijo
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // 2. Observer: Animaciones de revelación al hacer scroll
  const setupScrollAnimations = () => {
    const observerOptions = {
      threshold: 0.15
    };

    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Dejar de observar una vez revelado
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Seleccionamos las tarjetas de experiencia y habilidades
    document.querySelectorAll('.card, .skill-category, .edu-item').forEach(el => {
      el.classList.add('fade-in-on-scroll'); // Clase base en CSS
      observer.observe(el);
    });
  };

  // Ejecutar funciones
  setupSmoothScroll();
  setupScrollAnimations();

  // Console Log - "System Check" para reclutadores
  console.log("%c[QA System Check]: Pass", "color: #22c55e; font-weight: bold; font-size: 14px;");
  console.log("Portfolio build 2026.05.08 loaded with 0 critical errors.");
});
