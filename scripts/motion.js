document.addEventListener('DOMContentLoaded', () => {
  const headshot = document.querySelector('.headshot');

  const toggleHeadshot = () => {
    if (window.innerWidth < 768) {
      if (headshot) {
        headshot.style.display = 'none'; // Hide on small screens
      }
    } else {
      if (headshot) {
        headshot.style.display = 'block'; // Show on large screens
      }
    }
  };

  // Run on page load and resize
  toggleHeadshot();
  window.addEventListener('resize', toggleHeadshot);
});
