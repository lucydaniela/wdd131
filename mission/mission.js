const themeSelector = document.getElementById('theme-selector');

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.logo').src = 'byui-logo_white.webp';
    } else {
        document.body.classList.remove('dark');
        document.querySelector('.logo').src = 'byui-logo_blue.webp';
    }
}
themeSelector.addEventListener('change', changeTheme);
