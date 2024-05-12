function toggleResponsiveClass() {
    var screenWidth = window.innerWidth;

    if (screenWidth < 768) { 
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}

window.addEventListener('load', toggleResponsiveClass);
window.addEventListener('resize', toggleResponsiveClass);