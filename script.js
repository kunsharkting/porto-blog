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
  const car = document.querySelector(".car");
  const boost = document.querySelector(".boost");

  let lastScrollY = window.scrollY;
  let isScrolling;
  let flipped = false;

  window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / maxScroll;

      const windowWidth = window.innerWidth;
      const carPosition = scrollPercentage * (windowWidth - car.offsetWidth);
      car.style.left = `${carPosition}px`;

      if (scrollY < lastScrollY && !flipped) {
          car.classList.remove("reset-flip");
          car.classList.add("half-flip");
          flipped = true;
      } else if (scrollY > lastScrollY && flipped) {
          car.classList.remove("half-flip");
          car.classList.add("reset-flip");
          flipped = false;
      }

      boost.classList.add("active");
      boost.classList.remove("inactive");

      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
          boost.classList.add("inactive");
          boost.classList.remove("active");
      }, 200);

      lastScrollY = scrollY;
  });
});

window.addEventListener('load', function() {
  setTimeout(function() {
      document.getElementById('loader').classList.add('hide');
  }, 1200); // 1200 ms = 1,2 secondes, ajuste à ta convenance
});

// Pour les images
document.querySelectorAll('.enlarge-image .banner-image').forEach(img => {
    img.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('lightbox-img').src = this.src;
        document.getElementById('lightbox-img').style.display = 'block';
        document.getElementById('lightbox-video').style.display = 'none';
        document.getElementById('lightbox').style.display = 'block';
    });
});

// Pour les vidéos
document.querySelectorAll('.enlarge-video').forEach(video => {
    video.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('lightbox-img').style.display = 'none';
        var videoSrc = this.querySelector('source').src || this.src;
        document.getElementById('lightbox-video-src').src = videoSrc;
        document.getElementById('lightbox-video').load();
        document.getElementById('lightbox-video').style.display = 'block';
        document.getElementById('lightbox').style.display = 'block';
        document.getElementById('lightbox-video').play(); // Lancement automatique
    });
});

// Fermer le lightbox
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target.id === 'lightbox' || e.target.id === 'lightbox-close') {
        this.style.display = 'none';
        document.getElementById('lightbox-img').src = '';
        document.getElementById('lightbox-video').pause();
        document.getElementById('lightbox-video-src').src = '';
        document.getElementById('lightbox-video').load();
        document.getElementById('lightbox-video').style.display = 'none';
    }
});

document.getElementById('lightbox-x').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('lightbox-img').src = '';
    document.getElementById('lightbox-video').pause();
    document.getElementById('lightbox-video-src').src = '';
    document.getElementById('lightbox-video').load();
    document.getElementById('lightbox-video').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation volume
    var music = document.getElementById('bg-music');
    const btn = document.getElementById('music-toggle');
    const prev = document.getElementById('music-prev');
    const next = document.getElementById('music-next');
    const label = document.querySelector('.music-label');

    // Si un des éléments n'existe pas, on ne fait rien
    if (!music || !btn || !prev || !next || !label) return;

    if(music) music.volume = 0.2;

    // Playlist
    const playlist = [
        {src: "musique/girl.mp3", name: "Track 1"},
        {src: "musique/miss.mp3", name: "Track 2"},
        {src: "musique/mornings.mp3", name: "Track 3"},
        {src: "musique/remember.mp3", name: "Track 4"},
        {src: "musique/sakura.mp3", name: "Track 5"},
        {src: "musique/stupid.mp3", name: "Track 6"},
        {src: "musique/upbeat.mp3", name: "Track 7"}
    ];
    let currentTrack = 0;

    function loadTrack(idx) {
      currentTrack = (idx + playlist.length) % playlist.length;
      music.src = playlist[currentTrack].src;
      label.textContent = playlist[currentTrack].name;
      music.load();
      music.volume = 0; // Commence en sourdine
      music.play().catch(() => {});
  
      // Animation du volume progressif
      let targetVolume = 0.1;
      let step = 0.02;
      let interval = setInterval(() => {
          if (music.volume < targetVolume) {
              music.volume = Math.min(music.volume + step, targetVolume);
          } else {
              clearInterval(interval);
          }
      }, 2000); // Augmente le volume toutes les 200ms
    }
    function updateMusicBtn() {
        if (music.paused) {
            btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 6 Q8 12 8 18 Q8 20 10 19 L18 13 Q20 12 18 11 L10 5 Q8 4 8 6 Z" fill="currentColor"/></svg>`;
            btn.classList.remove('playing');
        } else {
            btn.innerHTML = `<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="2" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="2" fill="currentColor"/></svg>`;
            btn.classList.add('playing');
        }
    }
    btn.onclick = function() {
        if (music.paused) { music.play(); } else { music.pause(); }
    };
    prev.onclick = function() { loadTrack(currentTrack - 1); };
    next.onclick = function() { loadTrack(currentTrack + 1); };
    music.onplay = updateMusicBtn;
    music.onpause = updateMusicBtn;
    music.onended = function() { loadTrack(currentTrack + 1); };

    // Initialisation
    loadTrack(0);
    updateMusicBtn();
});
