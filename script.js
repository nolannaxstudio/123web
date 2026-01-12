// Scroll fluide pour les boutons et liens
document.querySelectorAll('.nav-link, .btn').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 60; // hauteur de la navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

// Force #home au rechargement
window.addEventListener('load', () => {
  if(window.location.hash !== '#home') {
    history.replaceState(null, null, '#home'); // change l'URL sans recharger
    window.scrollTo({ top: 0 }); // va en haut de la page
  }
});
