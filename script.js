// Ambil elemen yang dibutuhkan
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const allLinks = document.querySelectorAll('.nav-links a'); // Ambil semua link di menu

// 1. Fungsi Buka/Tutup Menu saat tombol Burger diklik
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. Fungsi: Tutup menu otomatis saat salah satu link diklik
allLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Hapus class active agar menu menutup kembali
        navLinks.classList.remove('active');
    });
});

// 3. Fungsi: Tutup menu jika layar diklik di luar menu (Opsional tapi bagus)
document.addEventListener('click', (e) => {
    // Jika yang diklik BUKAN tombol menu DAN BUKAN bagian dalam menu
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

console.log("Script berhasil dimuat!");