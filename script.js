const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Ouvrir/fermer le menu hamburger
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    if (navLinks.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  }
});

window.addEventListener('load', () => {
  const banner = document.querySelector('.banner');
  setTimeout(() => {
      banner.classList.add('show');
  }, 1000); // Afficher le bandeau après 1 seconde
});
