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

window.addEventListener('load', () => {
  const banner1 = document.querySelector('.banner1');
  setTimeout(() => {
      banner1.classList.add('show');
  }, 1000); // Afficher le bandeau après 1 seconde
});

window.addEventListener('load', () => {
  const banner2 = document.querySelector('.banner2');
  setTimeout(() => {
      banner2.classList.add('show');
  }, 1000); // Afficher le bandeau après 1 seconde
});

window.addEventListener('load', () => {
  const banner3 = document.querySelector('.banner3');
  setTimeout(() => {
      banner3.classList.add('show');
  }, 1000); // Afficher le bandeau après 1 seconde
});

// Animation du titre flottant
window.addEventListener("scroll", () => {
  const title = document.querySelector(".floating-title");
  let scrollY = window.scrollY;

  // Déplace le titre vers le haut en fonction du scroll
  title.style.transform = `translate(-50%, calc(-50% - ${scrollY * 1}px))`;

  // Effet de disparition progressive
  let opacity = Math.max(1 - scrollY / 300, 0);
  title.style.opacity = opacity;
});
