// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar, menutup navbar jika area di luar menu di klik
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Fungsi untuk mengarahkan ke WhatsApp saat form disubmit
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default

    // Ambil nilai dari input form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const quantity = document.getElementById('quantity').value;

    // Format pesan untuk WhatsApp
    const message = `Halo, saya ingin memesan:\n\n` +
                    `Nama: ${name}\n` +
                    `Email: ${email}\n` +
                    `Nomor Telepon: ${phone}\n` +
                    `Jumlah: ${quantity}\n\n` +
                    `Terima kasih.`;

    // Ganti dengan nomor WhatsApp Anda
    const whatsappNumber = '6289529936680'; // Contoh: 6281234567890 untuk nomor Indonesia

    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Buka URL WhatsApp
    window.open(whatsappURL, '_blank');
});
