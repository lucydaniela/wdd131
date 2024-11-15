// JavaScript fallback to dynamically adjust the gallery layout
function updateGalleryLayout() {
    const gallery = document.querySelector('.gallery');

    if (window.innerWidth >= 768) {
        gallery.style.display = 'grid';
        gallery.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else {
        gallery.style.display = 'grid';
        gallery.style.gridTemplateColumns = '1fr';
    }
}

// Initial layout setup and listen for resize events
updateGalleryLayout();
window.addEventListener('resize', updateGalleryLayout);

// Function to toggle the menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

