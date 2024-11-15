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
// Dynamically set the copyright year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Dynamically set the last modified date
const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastModified.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

