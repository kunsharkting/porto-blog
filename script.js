// --- FONCTION FADE IN MUSIQUE (accessible partout) ---
function fadeInMusic(audio, duration = 2000, targetVolume = 0.1) {
    audio.volume = 0;
    audio.play().catch(() => {});
    const step = 0.01;
    let current = 0;
    const interval = setInterval(() => {
        current += step;
        audio.volume = Math.min(current, targetVolume);
        if (audio.volume >= targetVolume) {
            clearInterval(interval);
        }
    }, duration * step / targetVolume);
}

// Hamburger menu animé avec slide/fade du menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        if (!hamburger.classList.contains('active')) {
            // Ouvre le menu avec animation slide-in
            hamburger.classList.add('active');
            navLinks.classList.remove('menu-slide-out');
            navLinks.classList.add('menu-slide-in');
            navLinks.style.display = 'flex';
        } else {
            // Ferme le menu avec animation slide-out
            hamburger.classList.remove('active');
            navLinks.classList.remove('menu-slide-in');
            navLinks.classList.add('menu-slide-out');
            setTimeout(() => {
                navLinks.style.display = 'none';
                navLinks.classList.remove('menu-slide-out');
            }, 350);
        }
    });

    // Ferme le menu si on clique en dehors
    document.addEventListener('click', (event) => {
        if (
            navLinks.classList.contains('menu-slide-in') &&
            !navLinks.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('menu-slide-in');
            navLinks.classList.add('menu-slide-out');
            setTimeout(() => {
                navLinks.style.display = 'none';
                navLinks.classList.remove('menu-slide-out');
            }, 350);
        }
    });

    // Ferme le menu quand on clique sur un lien du menu
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('menu-slide-in');
            navLinks.classList.add('menu-slide-out');
            setTimeout(() => {
                navLinks.style.display = 'none';
                navLinks.classList.remove('menu-slide-out');
            }, 350);
        });
    });
}

// Animation des bannières
document.addEventListener("DOMContentLoaded", () => {
    // 1. Animation pour toutes les bannières sur la page index
    if (document.body.classList.contains("index-page")) {
        const homeBanners = document.querySelectorAll(".banner, .banner1, .banner2, .banner3");
        function handleHomeBannerVisibility() {
            const viewportHeight = window.innerHeight;
            homeBanners.forEach((banner, index) => {
                const bannerTop = banner.getBoundingClientRect().top;
                const bannerBottom = banner.getBoundingClientRect().bottom;
                if (bannerTop < viewportHeight * 0.7 && bannerBottom > viewportHeight * 0.3) {
                    if (index % 2 === 0) {
                        banner.classList.add("left");
                        banner.classList.remove("hide-left", "right", "hide-right");
                    } else {
                        banner.classList.add("right");
                        banner.classList.remove("hide-right", "left", "hide-left");
                    }
                } else {
                    if (index % 2 === 0) {
                        banner.classList.add("hide-left");
                        banner.classList.remove("left", "right", "hide-right");
                    } else {
                        banner.classList.add("hide-right");
                        banner.classList.remove("right", "left", "hide-left");
                    }
                }
            });
        }
        window.addEventListener("scroll", handleHomeBannerVisibility);
        setTimeout(handleHomeBannerVisibility, 100);
    } else if (
        document.body.classList.contains("blog-page") ||
        document.body.classList.contains("membres-page")
    ) {
        // 2. Animation SEULEMENT pour .banner sur blog et membres
        const banners = document.querySelectorAll(".banner");
        function handleBannerVisibility() {
            const viewportHeight = window.innerHeight;
            banners.forEach((banner) => {
                const bannerTop = banner.getBoundingClientRect().top;
                const bannerBottom = banner.getBoundingClientRect().bottom;
                if (bannerTop < viewportHeight * 0.85 && bannerBottom > viewportHeight * 0.3) {
                    banner.classList.add("right");
                    banner.classList.remove("hide-right");
                } else {
                    banner.classList.add("hide-right");
                    banner.classList.remove("right");
                }
            });
        }
        window.addEventListener("scroll", handleBannerVisibility);
        setTimeout(handleBannerVisibility, 100);

        // 3. Animation NORMALE pour .banner1, .banner2, .banner3 sur blog/membres
        const otherBanners = document.querySelectorAll(".banner1, .banner2, .banner3");
        function handleOtherBannerVisibility() {
            const viewportHeight = window.innerHeight;
            otherBanners.forEach((banner, index) => {
                const bannerTop = banner.getBoundingClientRect().top;
                const bannerBottom = banner.getBoundingClientRect().bottom;
                if (bannerTop < viewportHeight * 0.7 && bannerBottom > viewportHeight * 0.3) {
                    if (index % 2 === 0) {
                        banner.classList.add("left");
                        banner.classList.remove("hide-left");
                    } else {
                        banner.classList.add("right");
                        banner.classList.remove("hide-right");
                    }
                } else {
                    if (index % 2 === 0) {
                        banner.classList.add("hide-left");
                        banner.classList.remove("left");
                    } else {
                        banner.classList.add("hide-right");
                        banner.classList.remove("right");
                    }
                }
            });
        }
        window.addEventListener("scroll", handleOtherBannerVisibility);
        setTimeout(handleOtherBannerVisibility, 100);
    } else {
        // 4. Animation NORMALE pour .banner1, .banner2, .banner3 sur toutes les autres pages
        const otherBanners = document.querySelectorAll(".banner1, .banner2, .banner3");
        function handleOtherBannerVisibility() {
            const viewportHeight = window.innerHeight;
            otherBanners.forEach((banner, index) => {
                const bannerTop = banner.getBoundingClientRect().top;
                const bannerBottom = banner.getBoundingClientRect().bottom;
                if (bannerTop < viewportHeight * 0.7 && bannerBottom > viewportHeight * 0.3) {
                    if (index % 2 === 0) {
                        banner.classList.add("left");
                        banner.classList.remove("hide-left");
                    } else {
                        banner.classList.add("right");
                        banner.classList.remove("hide-right");
                    }
                } else {
                    if (index % 2 === 0) {
                        banner.classList.add("hide-left");
                        banner.classList.remove("left");
                    } else {
                        banner.classList.add("hide-right");
                        banner.classList.remove("right");
                    }
                }
            });
        }
        window.addEventListener("scroll", handleOtherBannerVisibility);
        setTimeout(handleOtherBannerVisibility, 100);
    }
});

// Animation du titre flottant
function handleFloatingTitle() {
    const title = document.querySelector(".floating-title");
    if (title) {
        let scrollY = window.scrollY;
        if (scrollY > 300) {
            if (!title.classList.contains('fade-out')) {
                title.classList.add('fade-out');
            }
            title.style.pointerEvents = "none";
        } else {
            title.classList.remove('fade-out');
            title.style.pointerEvents = "";
            title.style.opacity = "";
        }
        // Garde le déplacement vertical si tu veux l'effet flottant :
        title.style.transform = scrollY > 300
            ? "translate(-50%, -50%)"
            : `translate(-50%, calc(-50% - ${scrollY * 1}px))`;
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
        {src: "musique/Water Resistant.mp3", name: "RL 1"}, // Ajoute ici ta nouvelle musique
        {src: "musique/All I Need.mp3", name: "RL 2"},  // Ajoute ici ta nouvelle musique
        {src: "musique/girl.mp3", name: "Track 1"},
        {src: "musique/miss.mp3", name: "Track 2"},
        {src: "musique/mornings.mp3", name: "Track 3"},
        {src: "musique/remember.mp3", name: "Track 4"},
        {src: "musique/sakura.mp3", name: "Track 5"},
        {src: "musique/stupid.mp3", name: "Track 6"},
        {src: "musique/upbeat.mp3", name: "Track 7"},
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

    function getRandomTrackIndex(current) {
        return (current + 1) % playlist.length;
    }

    function loadTrack(idx, autoPlay = false) {
        currentTrack = (idx + playlist.length) % playlist.length;
        music.src = playlist[currentTrack].src;
        label.textContent = playlist[currentTrack].name;
        renderTrackList();
        music.load();
        music.volume = 0.08;
        if (autoPlay) {
            fadeInMusic(music, 2000, 0.1);
        }
        // Animation du volume progressif (pour compatibilité)
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
        if (music.paused) { fadeInMusic(music, 2000, 0.1); } else { music.pause(); }
    };
    prev.onclick = function() { loadTrack(getRandomTrackIndex(currentTrack), true); };
    next.onclick = function() { loadTrack(getRandomTrackIndex(currentTrack), true); };
    music.onplay = updateMusicBtn;
    music.onpause = updateMusicBtn;
    music.onended = function() {
        const nextIdx = getNextTrackIndex(currentTrack);
        loadTrack(nextIdx, true);
    };

    // Initialisation
    //loadTrack(getRandomTrackIndex(-1), false); (pour charger une piste aléatoire au démarrage)
    loadTrack(0, false); // Toujours RL 1 au démarrage
    updateMusicBtn();

    // Optionnel : coupe la musique si muted au chargement
    if (localStorage.getItem('musicMuted') === 'true') {
        music.pause();
        music.currentTime = 0;
    }
});

// Pause la musique quand une vidéo démarre, reprend à la fin
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');
    // Sélectionne toutes les vidéos dans les bannières (hors lightbox)
    const blogVideos = document.querySelectorAll('.blog-page video.banner-image, .blog-page .banner-image.enlarge-video, .blog-page video.enlarge-video');

    blogVideos.forEach(video => {
        video.addEventListener('play', function() {
            if (bgMusic && !bgMusic.paused) {
                bgMusic.pause();
            }
        });
        video.addEventListener('ended', function() {
            if (bgMusic && bgMusic.paused && localStorage.getItem('musicMuted') !== 'true') {
                fadeInMusic(bgMusic, 2000, 0.1);
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
                fadeInMusic(bgMusic, 2000, 0.1);
            }
        });
    }
});

// Pop-up musique après le loader (version améliorée avec fade-in)
window.addEventListener('load', function() {
    const popup = document.getElementById('music-popup');
    const popupContent = document.querySelector('.music-popup-content');
    const popupClose = document.getElementById('music-popup-close');
    const popupPlay = document.getElementById('popup-play-link');
    const popupMute = document.getElementById('popup-mute-btn');
    const music = document.getElementById('bg-music');
    let muted = localStorage.getItem('musicMuted') === 'true';

    // Affiche la pop-up au chargement
    if (popup) popup.style.display = 'flex';

    // Fermer la pop-up et lancer la musique si non muté
    function closePopupAndMaybePlayMusic() {
        popup.style.display = 'none';
        if (music && !muted) fadeInMusic(music, 2000, 0.1);
    }

    // Fermer la pop-up sans lancer la musique
    function closePopupMute() {
        popup.style.display = 'none';
        muted = true;
        localStorage.setItem('musicMuted', 'true');
        if (music) {
            music.pause();
            music.currentTime = 0;
        }
    }

    // Clic sur la croix
    if (popupClose) {
        popupClose.addEventListener('click', function(e) {
            closePopupAndMaybePlayMusic();
            e.stopPropagation();
        });
    }

    // Clic sur "Play"
    if (popupPlay) {
        popupPlay.addEventListener('click', function(e) {
            muted = false;
            localStorage.setItem('musicMuted', 'false');
            closePopupAndMaybePlayMusic();
            e.stopPropagation();
        });
    }

    // Clic sur "Mute"
    if (popupMute) {
        popupMute.addEventListener('click', function(e) {
            closePopupMute();
            e.stopPropagation();
        });
    }

    // Clic en dehors du rectangle (fond de la pop-up)
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                // Si l'utilisateur n'a pas explicitement choisi "Mute", on considère qu'il veut la musique
                muted = false;
                localStorage.setItem('musicMuted', 'false');
                closePopupAndMaybePlayMusic();
            }
        });
    }

    // Empêche la fermeture si on clique à l'intérieur du rectangle (hors boutons)
    if (popupContent) {
        popupContent.addEventListener('click', function(e) {
            // Ne rien faire sauf si c'est un bouton déjà géré (croix, play, mute)
            // (Le stopPropagation dans les handlers ci-dessus suffit)
            e.stopPropagation();
        });
    }
});

// Apparition de la carte
function handleFloatingTitleAndMap() {
    const floatingTitle = document.querySelector(".floating-title");
    const mapTitle = document.querySelector(".map-title");
    const mapContainer = document.querySelector(".map-container");
    let scrollY = window.scrollY;
    const threshold = 1200; // même valeur pour tous

    // Floating title
    if (floatingTitle) {
        if (scrollY > threshold) {
            floatingTitle.style.opacity = 0;
            floatingTitle.style.pointerEvents = "none";
        } else {
            floatingTitle.style.transform = `translate(-50%, calc(-50% - ${scrollY * 1}px))`;
            let opacity = Math.max(1 - scrollY / threshold, 0);
            floatingTitle.style.opacity = opacity;
            floatingTitle.style.pointerEvents = "";
        }
    }

    // Map title et map container : même logique que le floating title
    if (mapTitle && mapContainer) {
        if (scrollY > threshold) {
            mapTitle.classList.remove('visible');
            mapContainer.classList.remove('visible');
        } else {
            mapTitle.classList.add('visible');
            mapContainer.classList.add('visible');
        }
    }
}
window.addEventListener("scroll", handleFloatingTitleAndMap);
window.addEventListener("DOMContentLoaded", handleFloatingTitleAndMap);

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

document.addEventListener('DOMContentLoaded', function() {
    // Seulement sur la page index
    if (document.body.classList.contains('index-page')) {
        const mapContainer = document.querySelector('.map-container');
        if (mapContainer && !mapContainer.querySelector('.map-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'map-overlay';
            mapContainer.appendChild(overlay);

            overlay.addEventListener('click', function() {
                overlay.style.display = 'none';
            });

            // Pour desktop : remet l'overlay si la souris quitte la carte
            mapContainer.addEventListener('mouseleave', function() {
                overlay.style.display = '';
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if (document.body.classList.contains("overview-page")) {
        const cards = document.querySelectorAll('.overview-card');
        // Détermine la position du card dans la ligne (gauche, milieu, droite)
        cards.forEach((card, i) => {
            const pos = i % 3;
            if (pos === 0) card.classList.add('in-left');
            else if (pos === 2) card.classList.add('in-right');
            else card.classList.add('in-top');
        });

        function handleOverviewCards() {
            const windowHeight = window.innerHeight;
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                // Animation d'entrée uniquement
                if (rect.top < windowHeight * 0.85 && rect.bottom > windowHeight * 0.15) {
                    card.classList.add('visible');
                } else {
                    card.classList.remove('visible');
                }
            });
        }
        window.addEventListener('scroll', handleOverviewCards);
        window.addEventListener('resize', handleOverviewCards);
        setTimeout(handleOverviewCards, 100);
    }
});
