// Toggle navbar
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu'); // Variabel untuk hamburger

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus(); // Fokuskan ke search box
    e.preventDefault(); // Mencegah submit default
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-card');
document.querySelector('#shopping-card-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// Klik di luar elemen untuk menutup
const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
    // Menutup navbar ketika klik di luar
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    // Menutup search form ketika klik di luar
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    // Menutup shopping cart ketika klik di luar
    if (!shoppingCart.contains(e.target) && !document.querySelector('#shopping-card-button').contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal'); // Menggunakan selector yang benar
const itemDetailButtons = document.querySelectorAll('.item-detail-button'); // Pastikan ini adalah kelas yang benar

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex'; // Menampilkan modal
        e.preventDefault();
    };

})

const itemDetailModal1 = document.querySelector('#item-detail-modal2'); // Menggunakan selector yang benar
const itemDetailButtons1 = document.querySelectorAll('.item-detail-button'); // Pastikan ini adalah kelas yang benar

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex'; // Menampilkan modal
        e.preventDefault();
    };

})


// Menutup modal jika klik di luar
document.addEventListener('click', function (e) {
    if (!itemDetailModal.contains(e.target) && !itemDetailButton.contains(e.target)) {
        itemDetailModal.style.display = 'none'; // Menutup modal
    }
});

// cilck tombol close

document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none'; // Menutup modal
    e.preventDefault();
};

// klik di luar modal
const modal = document.querySelector('#item-detail-modal');
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}