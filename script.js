// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = target.offsetTop - 70; // adjust for fixed navbar
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // Close mobile menu after click
    const navLinks = document.querySelector('.nav-links');
    if(navLinks.classList.contains('show')){
      navLinks.classList.remove('show');
    }
  });
});

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
