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

document.addEventListener("DOMContentLoaded", () => {
  const banners = document.querySelectorAll(".banner, .banner1, .banner2, .banner3");

  window.addEventListener("scroll", () => {
    const viewportHeight = window.innerHeight;

    banners.forEach((banner, index) => {
      const bannerTop = banner.getBoundingClientRect().top;
      const bannerBottom = banner.getBoundingClientRect().bottom;

      // Affiche la bannière si elle est visible dans le viewport
      if (bannerTop < viewportHeight * 0.7 && bannerBottom > viewportHeight * 0.3) {
        if (index % 2 === 0) {
          banner.classList.add("right"); // Animation pour arriver du côté droit
          banner.classList.remove("hide-right");
        } else {
          banner.classList.add("left"); // Animation pour arriver du côté gauche
          banner.classList.remove("hide-left");
        }
      } else {
        // Cache la bannière si elle quitte le viewport (plus tôt)
        if (index % 2 === 0) {
          banner.classList.add("hide-right");
          banner.classList.remove("right");
        } else {
          banner.classList.add("hide-left");
          banner.classList.remove("left");
        }
      }
    });
  });
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

document.addEventListener("DOMContentLoaded", () => {
  const walkingMan = document.querySelector(".walking-man");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // Position actuelle du scroll
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight; // Scroll maximum
    const scrollPercentage = scrollY / maxScroll; // Pourcentage de progression sur la page

    // Calculer la position du bonhomme (de gauche à droite)
    const windowWidth = window.innerWidth;
    const manPosition = scrollPercentage * (windowWidth - 50); // 50 = largeur du bonhomme

    // Déplacer le bonhomme
    walkingMan.style.transform = `translateX(${manPosition}px)`;
  });
});
