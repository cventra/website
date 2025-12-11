
// Typewriter Logic
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.typing-text');
    if (!textElement) return;

    const words = ['Inventors', 'Engineers', 'Creatives', 'Sports', 'Thinkers'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Faster deletion
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; // Normal typing
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(type, typeSpeed);
    }

    type();
});

// Dynamic Favicon Logic (Preserved)
(function () {
    const map = {
        'index.html': '../img/icons/icon-home.svg',
        'beranda.html': '../img/icons/icon-home.svg',
        'profil-kelas.html': '../img/icons/icon-profil.svg',
        'anggota-kelas.html': '../img/icons/icon-anggota.svg',
        'anggota kelas.html': '../img/icons/icon-anggota.svg',
        'galeri-kegiatan.html': '../img/icons/icon-galeri.svg',
        'galery.html': '../img/icons/icon-galeri.svg',
        'prestasi-kelas.html': '../img/icons/icon-prestasi.svg',
        'prestasi kelas.html': '../img/icons/icon-prestasi.svg',
        'pengumuman.html': '../img/icons/icon-pengumuman.svg',
        'kontak.html': '../img/icons/icon-kontak.svg',
        'saran-pesan.html': '../img/icons/icon-saran-pesan.svg'
    };
    const file = window.location.pathname.split('/').pop() || 'index.html';
    let icon = map[decodeURIComponent(file)];
    if (!icon) {
        icon = '../img/icons/icon-home.svg';
    }

    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = icon;
    link.type = 'image/svg+xml';
    const existing = document.querySelectorAll('link[rel*="icon"]');
    existing.forEach(e => e.remove());
    document.head.appendChild(link);
})();
