function adjustGalleryLayout() {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return; // Check if gallery exists

    const screenWidth = window.innerWidth;

    // Adjust grid columns based on screen width
    if (screenWidth < 480) {
        gallery.style.gridTemplateColumns = '1fr'; // Single column for small screens
    } else if (screenWidth < 768) {
        gallery.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Two columns for medium screens
    } else {
        gallery.style.gridTemplateColumns = 'repeat(3, 1fr)'; // Three columns for large screens
    }
}

window.addEventListener('load', adjustGalleryLayout);
window.addEventListener('resize', adjustGalleryLayout);

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show'); // Toggle the 'show' class to show/hide the menu
}

