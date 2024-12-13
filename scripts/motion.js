document.addEventListener('DOMContentLoaded', () => {
    const headshot = document.querySelector('.headshot');
  
    const toggleHeadshot = () => {
      if (window.innerWidth < 768) {
        headshot?.style.setProperty('display', 'none', 'important');
      } else {
        headshot?.style.removeProperty('display');
      }
    };
  
    // Initial check
    toggleHeadshot();
  
    // Adjust on window resize
    window.addEventListener('resize', toggleHeadshot);
  });
  