// Intersection Observer for fade-in effect
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

fadeInElements.forEach(el => observer.observe(el));


// Responsive Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Typing animation
const typed = new Typed('#typed', {
    strings: ['Fadhil aufa', 'a Web Developer', 'a UI/UX Designer', 'a Freelancer'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
  });
  
// Animate multiple circular stats
function animateAllCircles() {
    const rings = document.querySelectorAll('.progress-ring');
    const counts = document.querySelectorAll('.circle-count');
  
    rings.forEach((circle, index) => {
      const count = counts[index];
      const target = parseInt(circle.getAttribute('data-target'));
      const radius = 70;
      const circumference = 2 * Math.PI * radius;
      let current = 0;
  
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference;
  
      const interval = setInterval(() => {
        if (current <= target) {
          const offset = circumference - (current / 100) * circumference;
          circle.style.strokeDashoffset = offset;
          count.textContent = current;
          current++;
        } else {
          clearInterval(interval);
        }
      }, 15);
    });
  }
  
  // Trigger all animations when stats section in view
  const statsSection = document.getElementById('stats');
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateAllCircles();
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  
  statsObserver.observe(statsSection);
  
  
  