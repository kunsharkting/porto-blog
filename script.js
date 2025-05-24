// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        }
    });
}

// Animation des bannières
document.addEventListener("DOMContentLoaded", () => {
    const banners = document.querySelectorAll(".banner, .banner1, .banner2, .banner3");
    function handleBannerVisibility() {
        const viewportHeight = window.innerHeight;
        banners.forEach((banner, index) => {
            const bannerTop = banner.getBoundingClientRect().top;
            const bannerBottom = banner.getBoundingClientRect().bottom;
            if (bannerTop < viewportHeight * 0.7 && bannerBottom > viewportHeight * 0.3) {
                if (index % 2 === 0) {
                    banner.classList.add("right");
                    banner.classList.remove("hide-right");
                } else {
                    banner.classList.add("left");
                    banner.classList.remove("hide-left");
                }
            } else {
                if (index % 2 === 0) {
                    banner.classList.add("hide-right");
                    banner.classList.remove("right");
                } else {
                    banner.classList.add("hide-left");
                    banner.classList.remove("left");
                }
            }
        });
    }
    window.addEventListener("scroll", handleBannerVisibility);
    handleBannerVisibility();
});

// Animation du titre flottant
function handleFloatingTitle() {
    const title = document.querySelector(".floating-title");
    if (title) {
        let scrollY = window.scrollY;
        if (scrollY > 300) {
            title.style.opacity = 0;
            title.style.pointerEvents = "none";
        } else {
            title.style.transform = `translate(-50%, calc(-50% - ${scrollY * 1}px))`;
            let opacity = Math.max(1 - scrollY / 300, 0);
            title.style.opacity = opacity;
            title.style.pointerEvents = "";
        }
    }
}
window.addEventListener("scroll", handleFloatingTitle);
window.addEventListener("DOMContentLoaded", handleFloatingTitle);

// Animation de la voiture et du boost
document.addEventListener("DOMContentLoaded", () => {
    const car = document.querySelector(".car");
    const boost = document.querySelector(".boost");
    const road = document.querySelector(".road");
    if (!car || !boost || !road) return;

    let lastScrollY = window.scrollY;
    let isScrolling;
    let flipped = false;

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const roadWidth = road.offsetWidth || window.innerWidth;
        const carWidth = car.offsetWidth;
        const scrollPercentage = scrollY / maxScroll;
        const carPosition = scrollPercentage * (roadWidth - carWidth);
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

// Loader
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(function() {
            loader.classList.add('hide');
        }, 1200);
    }
});

// Lightbox images
document.querySelectorAll('.enlarge-image .banner-image').forEach(img => {
    img.addEventListener('click', function(e) {
        e.preventDefault();
        const lightboxImg = document.getElementById('lightbox-img');
        const lightbox = document.getElementById('lightbox');
        const lightboxVideo = document.getElementById('lightbox-video');
        if (lightboxImg && lightbox && lightboxVideo) {
            lightboxImg.src = this.src;
            lightboxImg.style.display = 'block';
            lightboxVideo.style.display = 'none';
            lightbox.style.display = 'block';
        }
    });
});

// Lightbox vidéos
document.querySelectorAll('.enlarge-video').forEach(video => {
    video.addEventListener('click', function(e) {
        e.preventDefault();
        const lightboxImg = document.getElementById('lightbox-img');
        const lightbox = document.getElementById('lightbox');
        const lightboxVideo = document.getElementById('lightbox-video');
        const lightboxVideoSrc = document.getElementById('lightbox-video-src');
        if (lightboxImg && lightbox && lightboxVideo && lightboxVideoSrc) {
            lightboxImg.style.display = 'none';
            var videoSrc = this.querySelector('source') ? this.querySelector('source').src : this.src;
            lightboxVideoSrc.src = videoSrc;
            lightboxVideo.load();
            lightboxVideo.style.display = 'block';
            lightbox.style.display = 'block';
            lightboxVideo.play();
        }
    });
});

// Fermer le lightbox (fond)
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    lightbox.addEventListener('click', function(e) {
        if (e.target.id === 'lightbox' || e.target.id === 'lightbox-close') {
            this.style.display = 'none';
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxVideo = document.getElementById('lightbox-video');
            const lightboxVideoSrc = document.getElementById('lightbox-video-src');
            if (lightboxImg) lightboxImg.src = '';
            if (lightboxVideo) {
                lightboxVideo.pause();
                lightboxVideo.style.display = 'none';
            }
            if (lightboxVideoSrc) lightboxVideoSrc.src = '';
            if (lightboxVideo) lightboxVideo.load();
        }
    });
}

// Fermer le lightbox (croix)
const lightboxX = document.getElementById('lightbox-x');
if (lightboxX) {
    lightboxX.addEventListener('click', function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxVideo = document.getElementById('lightbox-video');
        const lightboxVideoSrc = document.getElementById('lightbox-video-src');
        if (lightbox) lightbox.style.display = 'none';
        if (lightboxImg) lightboxImg.src = '';
        if (lightboxVideo) {
            lightboxVideo.pause();
            lightboxVideo.style.display = 'none';
        }
        if (lightboxVideoSrc) lightboxVideoSrc.src = '';
        if (lightboxVideo) lightboxVideo.load();
    });
}

// --- MUSIQUE ---
document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('bg-music');
    var btn = document.getElementById('music-toggle');
    var prev = document.getElementById('music-prev');
    var next = document.getElementById('music-next');
    var label = document.getElementById('music-label');
    var trackList = document.getElementById('track-list');

    if (!music || !btn || !prev || !next || !label || !trackList) return;

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

    function renderTrackList() {
        trackList.innerHTML = "";
        const currentLi = document.createElement('li');
        currentLi.textContent = playlist[currentTrack].name;
        currentLi.classList.add('active');
        currentLi.onclick = function(e) {
            e.stopPropagation();
            trackList.style.display = 'none';
        };
        trackList.appendChild(currentLi);
        playlist.forEach((track, idx) => {
            if (idx === currentTrack) return;
            const li = document.createElement('li');
            li.textContent = track.name;
            li.onclick = function(e) {
                e.stopPropagation();
                loadTrack(idx, true);
                trackList.style.display = 'none';
            };
            trackList.appendChild(li);
        });
    }

    label.onclick = function(e) {
        e.stopPropagation();
        renderTrackList();
        trackList.style.display = (trackList.style.display === 'block') ? 'none' : 'block';
    };

    document.addEventListener('click', function() {
        trackList.style.display = 'none';
    });

    function getRandomTrackIndex(exclude) {
        let idx;
        do {
            idx = Math.floor(Math.random() * playlist.length);
        } while (playlist.length > 1 && idx === exclude);
        return idx;
    }

    function loadTrack(idx, autoPlay = false) {
        currentTrack = (idx + playlist.length) % playlist.length;
        music.src = playlist[currentTrack].src;
        label.textContent = playlist[currentTrack].name;
        renderTrackList();
        music.load();
        music.volume = 0.08;
        if (autoPlay) {
            music.play().catch(() => {});
        }
        // Animation du volume progressif
        let targetVolume = 0.1;
        let step = 0.02;
        let interval = setInterval(() => {
            if (music.volume < targetVolume) {
                music.volume = Math.min(music.volume + step, targetVolume);
            } else {
                clearInterval(interval);
            }
        }, 200);
    }

    function updateMusicBtn() {
        if (music.paused) {
            btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 6 Q8 12 8 18 Q8 20 10 19 L18 13 Q20 12 18 11 L10 5 Q8 4 8 6 Z" fill="currentColor"/></svg>`;
            btn.classList.remove('playing');
            label.classList.remove('playing');
            label.classList.add('paused');
        } else {
            btn.innerHTML = `<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="2" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="2" fill="currentColor"/></svg>`;
            btn.classList.add('playing');
            label.classList.remove('paused');
            label.classList.add('playing');
        }
    }

    btn.onclick = function() {
        if (music.paused) { music.play(); } else { music.pause(); }
    };
    prev.onclick = function() { loadTrack(getRandomTrackIndex(currentTrack), true); };
    next.onclick = function() { loadTrack(getRandomTrackIndex(currentTrack), true); };
    music.onplay = updateMusicBtn;
    music.onpause = updateMusicBtn;
    music.onended = function() {
        const nextIdx = getRandomTrackIndex(currentTrack);
        loadTrack(nextIdx, true);
    };

    // Initialisation
    loadTrack(getRandomTrackIndex(-1), true);
    updateMusicBtn();

    // Optionnel : coupe la musique si muted au chargement
    if (localStorage.getItem('musicMuted') === 'true') {
        music.pause();
        music.currentTime = 0;
    }
});

// Pop-up musique après le loader
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const popup = document.getElementById('music-popup');
    const popupClose = document.getElementById('music-popup-close');
    const music = document.getElementById('bg-music');
    let muted = localStorage.getItem('musicMuted') === 'true';

    if (loader) {
        setTimeout(function() {
            loader.classList.add('hide');
            if (popup) popup.style.display = 'flex';
        }, 1200);
    } else {
        if (popup) popup.style.display = 'flex';
    }
    if (popupClose) {
        popupClose.addEventListener('click', function(e) {
            popup.style.display = 'none';
            if (music && !muted) music.play().catch(() => {});
            e.stopPropagation();
        });
    }
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.style.display = 'none';
                if (music && !muted) music.play().catch(() => {});
            }
        });
    }
    // Gestion du bouton mute
    const popupMute = document.getElementById('popup-mute-btn');
    if (popupMute) {
        popupMute.addEventListener('click', function(e) {
            popup.style.display = 'none';
            muted = true;
            localStorage.setItem('musicMuted', 'true');
            if (music) {
                music.pause();
                music.currentTime = 0;
            }
            e.stopPropagation();
        });
    }
    // Gestion du bouton play dans la popup
    const popupPlay = document.getElementById('popup-play-link');
    if (popupPlay) {
        popupPlay.addEventListener('click', function(e) {
            popup.style.display = 'none';
            muted = false;
            localStorage.setItem('musicMuted', 'false');
            if (music) music.play().catch(() => {});
            e.stopPropagation();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('music-popup');
    const popupPlay = document.getElementById('popup-play-link');
    const music = document.getElementById('bg-music');
    if (popup && popupPlay) {
        popupPlay.addEventListener('click', function(e) {
            popup.style.display = 'none';
            localStorage.setItem('musicMuted', 'false');
            if (music) music.play().catch(() => {});
            e.stopPropagation();
        });
    }
});

// Mute button in popup
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('music-popup');
    const popupMute = document.getElementById('popup-mute-btn');
    const music = document.getElementById('bg-music');
    if (popup && popupMute) {
        popupMute.addEventListener('click', function(e) {
            popup.style.display = 'none';
            localStorage.setItem('musicMuted', 'true');
            if (music) {
                music.pause();
                music.currentTime = 0;
            }
            e.stopPropagation();
        });
    }
});

// Pause la musique quand une vidéo démarre, reprend à la fin
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');
    // Sélectionne toutes les vidéos dans les bannières (hors lightbox)
    const blogVideos = document.querySelectorAll('.banner-image.enlarge-video, video.banner-image');

    blogVideos.forEach(video => {
        video.addEventListener('play', function() {
            if (bgMusic && !bgMusic.paused) {
                bgMusic.pause();
            }
        });
        video.addEventListener('ended', function() {
            if (bgMusic && bgMusic.paused && localStorage.getItem('musicMuted') !== 'true') {
                bgMusic.play().catch(() => {});
            }
        });
    });

    // Pour la vidéo dans la lightbox
    const lightboxVideo = document.getElementById('lightbox-video');
    if (lightboxVideo) {
        lightboxVideo.addEventListener('play', function() {
            if (bgMusic && !bgMusic.paused) {
                bgMusic.pause();
            }
        });
        lightboxVideo.addEventListener('ended', function() {
            if (bgMusic && bgMusic.paused && localStorage.getItem('musicMuted') !== 'true') {
                bgMusic.play().catch(() => {});
            }
        });
    }
});

// Apparition de la carte
function handleMapAppear() {
    const mapTitle = document.querySelector('.map-title');
    const mapContainer = document.querySelector('.map-container');
    if (!mapTitle || !mapContainer) return;
    let scrollY = window.scrollY;
    if (scrollY < 1100) {
        mapTitle.classList.add('visible');
        mapContainer.classList.add('visible');
    } else {
        mapTitle.classList.remove('visible');
        mapContainer.classList.remove('visible');
    }
}
window.addEventListener("scroll", handleMapAppear);
window.addEventListener("DOMContentLoaded", handleMapAppear);

// Panda ballon mode
document.addEventListener('DOMContentLoaded', function() {
    const panda = document.getElementById('panda-cursor');
    const toggleBtn = document.getElementById('toggle-panda');
    const mapIframe = document.querySelector('#map iframe');
    let pandaActive = false;

    if (toggleBtn && panda) {
        toggleBtn.addEventListener('click', function() {
            pandaActive = !pandaActive;
            panda.style.display = pandaActive ? 'block' : 'none';
            toggleBtn.textContent = pandaActive ? 'Disable ball mode ⚽' : 'Fun ball mode ⚽';
            if (mapIframe) {
                mapIframe.style.pointerEvents = pandaActive ? 'none' : 'auto';
            }
            document.body.classList.toggle('ballon-active', pandaActive);
        });

        document.addEventListener('mousemove', function(e) {
            if (pandaActive) {
                panda.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
            }
        });
    }
});

// Plein écran carte mobile
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        const btn = document.getElementById('map-fullscreen-btn');
        if (btn) btn.style.display = 'block';
    }

    const mapSection = document.getElementById('map');
    const mapBtn = document.getElementById('map-fullscreen-btn');
    const mapExitBtn = document.getElementById('map-exit-fullscreen-btn');
    if (mapSection && mapBtn && mapExitBtn) {
        mapBtn.addEventListener('click', function() {
            mapSection.classList.add('fullscreen');
        });
        mapExitBtn.addEventListener('click', function() {
            mapSection.classList.remove('fullscreen');
            window.scrollTo(0, mapSection.offsetTop);
        });
    }
});

// Panda pluie sur toutes les pages (version emoji)
document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll('.banner, .banner1, .banner2, .banner3');
    const columnsCount = 20; // Nombre de colonnes virtuelles

    banners.forEach(banner => {
        const rainContainer = banner.querySelector('.panda-rain');
        if (!rainContainer) return;

        // Tableau pour suivre les colonnes occupées
        const columns = new Array(columnsCount).fill(false);

        setInterval(() => {
            // Cherche les colonnes libres
            const freeColumns = [];
            for (let i = 0; i < columnsCount; i++) {
                if (!columns[i]) freeColumns.push(i);
            }
            if (freeColumns.length === 0) return; // Toutes occupées, on attend

            // Choisit une colonne libre au hasard
            const col = freeColumns[Math.floor(Math.random() * freeColumns.length)];
            columns[col] = true;

            const panda = document.createElement('span');
            panda.className = 'panda-fall';
            panda.textContent = '🐼';

            // Position horizontale selon la colonne
            const leftPercent = (col + 0.5) * (100 / columnsCount);
            panda.style.left = `calc(${leftPercent}% - 16px)`; // centré sur la colonne
            panda.style.top = `-40px`;

            // Taille aléatoire
            const scale = 0.7 + Math.random() * 0.8;
            panda.style.fontSize = `${24 * scale}px`;

            // Animation
            const duration = 6 + Math.random() * 4; // 6 à 10 secondes
            const rotate = (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 360);
            panda.animate([
                { transform: `translateY(0) rotate(0deg)`, opacity: 0.4 },
                { transform: `translateY(${banner.offsetHeight + 60}px) rotate(${rotate}deg)`, opacity: 0.4 }
            ], {
                duration: duration * 1000,
                easing: 'linear'
            });
            panda.style.transition = `transform ${duration}s linear`;
            setTimeout(() => {
                panda.style.transform = `translateY(${banner.offsetHeight + 60}px) rotate(${rotate}deg)`;
            }, 10);
            setTimeout(() => {
                panda.remove();
                columns[col] = false; // Libère la colonne
            }, duration * 1000);
            rainContainer.appendChild(panda);
        }, 1200 + Math.random() * 900); // Pluie moins dense
    });
});
