// Rotator Logic
document.addEventListener('DOMContentLoaded', () => {
    const items = Array.from(document.querySelectorAll('.rotator__item'));
    if (!items.length) return;
    let idx = 0;
    const show = i => {
        items.forEach((el, j) => {
            el.style.opacity = j === i ? '1' : '0';
            el.style.transform = j === i ? 'translateY(0)' : 'translateY(18%)';
        });
    };
    show(0);
    setInterval(() => { idx = (idx + 1) % items.length; show(idx); }, 2200);
});

// Dynamic Favicon Logic
(function () {
    const map = {
        'index.html': '../img/icons/icon-home.svg',
        'beranda.html': '../img/icons/icon-home.svg',
        'profil-kelas.html': '../img/icons/icon-profil.svg',
        'anggota-kelas.html': '../img/icons/icon-anggota.svg',
        'anggota kelas.html': '../img/icons/icon-anggota.svg', // handling space just in case
        'galeri-kegiatan.html': '../img/icons/icon-galeri.svg',
        'galery.html': '../img/icons/icon-galeri.svg', // based on file list
        'prestasi-kelas.html': '../img/icons/icon-prestasi.svg',
        'prestasi kelas.html': '../img/icons/icon-prestasi.svg',
        'pengumuman.html': '../img/icons/icon-pengumuman.svg',
        'kontak.html': '../img/icons/icon-kontak.svg',
        'saran-pesan.html': '../img/icons/icon-saran-pesan.svg'
    };
    const file = window.location.pathname.split('/').pop() || 'index.html';
    // If file is empty string (directory root), default to index.html/home

    // Try to match, if not found use default home
    let icon = map[decodeURIComponent(file)];
    if (!icon) {
        // fallback for file names that might not match exactly or for root
        icon = '../img/icons/icon-home.svg';
    }

    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = icon;
    link.type = 'image/svg+xml';

    // Remove existing favicons to avoid conflicts
    const existing = document.querySelectorAll('link[rel*="icon"]');
    existing.forEach(e => e.remove());

    document.head.appendChild(link);
})();
