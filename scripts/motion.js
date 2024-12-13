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
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name && email && message) {
        alert('Thank you for reaching out! Your message has been sent.');
        form.reset(); // Clear the form after submission
      } else {
        alert('Please fill out all the fields.');
      }
    });
  });
  