// ===== Initialize Lucide Icons =====
lucide.createIcons();

// Re-initialize Lucide icons after a delay to catch any dynamically loaded content
setTimeout(() => {
  lucide.createIcons();
  console.log('Lucide icons initialized');
}, 1000);

// ===== Lenis Smooth Scrolling =====
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Lenis + GSAP ScrollTrigger sync
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ===== Custom Cursor =====
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX - 4 + 'px';
  cursor.style.top = mouseY - 4 + 'px';
});

function animateCursorFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  cursorFollower.style.left = followerX - 20 + 'px';
  cursorFollower.style.top = followerY - 20 + 'px';
  requestAnimationFrame(animateCursorFollower);
}
animateCursorFollower();

// Cursor hover effect
const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-card, .team-card, .tech-card');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursorFollower.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursorFollower.classList.remove('hover'));
});

// ===== Loading Screen =====
const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loader-bar');
const loaderPercent = document.getElementById('loader-percent');

let progress = 0;
const loadInterval = setInterval(() => {
  progress += Math.random() * 15;
  if (progress > 100) progress = 100;
  loaderPercent.textContent = Math.floor(progress) + '%';
  if (progress >= 100) {
    clearInterval(loadInterval);
    setTimeout(() => {
      gsap.to(loader, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          loader.style.display = 'none';
          initHeroAnimations();
        }
      });
    }, 400);
  }
}, 100);

// ===== Hero Animations =====
function initHeroAnimations() {
  const heroTl = gsap.timeline();

  heroTl
    .from('.hero-badge', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.hero-word', {
      y: '120%',
      duration: 1,
      ease: 'power3.out',
      stagger: 0.15
    }, '-=0.4')
    .from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-cta > *', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.1
    }, '-=0.4')
    .from('.hero-stats > *', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.08
    }, '-=0.3');

  // Counter animation
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    gsap.to(el, {
      textContent: target,
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      }
    });
  });
}

// ===== Floating Particles =====
function createParticles() {
  const container = document.getElementById('particles');
  const count = window.innerWidth < 768 ? 20 : 40;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    particle.style.width = (Math.random() * 3 + 1) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}
createParticles();

// ===== Navbar Scroll Behavior =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// ===== Mobile Menu =====
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ===== GSAP ScrollTrigger Animations =====
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Reveal animations
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
revealElements.forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: el.classList.contains('reveal-left') ? -60 : el.classList.contains('reveal-right') ? 60 : 60, x: el.classList.contains('reveal-left') ? -60 : el.classList.contains('reveal-right') ? 60 : 0 },
    {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      }
    }
  );
});

// Service cards stagger
gsap.fromTo('.service-card',
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#services .grid',
      start: 'top 80%',
      once: true,
    }
  }
);

// Process steps stagger
gsap.fromTo('.process-step',
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.process-step',
      start: 'top 80%',
      once: true,
    }
  }
);

// Process line animation
gsap.to('#process-line', {
  width: '100%',
  ease: 'none',
  scrollTrigger: {
    trigger: '#process',
    start: 'top 60%',
    end: 'bottom 40%',
    scrub: 1,
  }
});

// Tech cards stagger
gsap.fromTo('.tech-card',
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 0.05,
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: '#technologies .grid',
      start: 'top 80%',
      once: true,
    }
  }
);

// Portfolio cards
gsap.fromTo('.portfolio-card',
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#portfolio .grid',
      start: 'top 80%',
      once: true,
    }
  }
);

// Team cards
gsap.fromTo('.team-card',
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#team .grid',
      start: 'top 80%',
      once: true,
    }
  }
);

// Testimonial cards
gsap.fromTo('.testimonial-card',
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#testimonials .grid',
      start: 'top 80%',
      once: true,
    }
  }
);

// Hero parallax on glow elements
gsap.to('.hero-glow', {
  y: -100,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  }
});

gsap.to('.hero-glow-2', {
  y: 80,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  }
});

// ===== Smooth Scroll Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      lenis.scrollTo(target, { offset: -80, duration: 1.2 });
    }
  });
});

// ===== Back to Top Button =====
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 600) {
    backToTop.style.opacity = '1';
    backToTop.style.transform = 'translateY(0)';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.transform = 'translateY(16px)';
  }
});

backToTop.addEventListener('click', () => {
  lenis.scrollTo(0, { duration: 1.5 });
});

// ===== Contact Form =====
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('✨ Message sent successfully! We\'ll get back to you soon.');
  contactForm.reset();
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ===== Magnetic Hover Effect on Buttons =====
document.querySelectorAll('a[href="#contact"], a[href="#portfolio"]').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  });
});

// ===== Text Scramble Effect on Hover =====
const logoEl = document.querySelector('nav a[href="#hero"]');
if (logoEl) {
  const originalText = logoEl.innerHTML;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  logoEl.addEventListener('mouseenter', () => {
    let iterations = 0;
    const interval = setInterval(() => {
      logoEl.innerHTML = logoEl.innerHTML.split('').map((char, index) => {
        if (char === '<' || char === '>' || char === '/' || char === 's' || char === 'p' || char === 'a' || char === 'n') {
          return char;
        }
        if (index < iterations) {
          return originalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');

      iterations += 1 / 3;
      if (iterations >= originalText.length) {
        clearInterval(interval);
        logoEl.innerHTML = originalText;
      }
    }, 30);
  });
}

// ===== Section highlighting in nav =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-white');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('text-white');
    }
  });
});


// ===== 3D TILT CARD EFFECT WITH MOUSE TRACKING =====
/* 
 * 🎯 Mouse Tracking - Cards follow your mouse movement
 * 🔄 3D Rotation - Tilts up to 12° in X and Y axis
 * ✨ Orchid Glare - Radial gradient follows mouse with orchid color
 * 📏 Perspective - 1000px depth for realistic 3D
 * 🔍 Slight Zoom - Scales to 1.02 on hover
 * 🌊 Smooth Transition - Cubic bezier easing (0.3s)
 * 
 * Works on:
 * - Service cards only
 */
function initTiltCards() {
  // Only apply to service cards
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach(card => {
    // Create glare overlay
    const glare = document.createElement('div');
    glare.className = 'tilt-glare';
    card.appendChild(glare);
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate percentages
      const px = x / rect.width;
      const py = y / rect.height;
      
      // Calculate rotation (max 12 degrees)
      const rotateY = (px - 0.5) * 24; // -12 to +12
      const rotateX = (0.5 - py) * 24; // -12 to +12
      
      // Apply 3D transform
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Update glare position
      glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(218, 112, 214, 0.3), transparent 50%)`;
      glare.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      glare.style.opacity = '0';
    });
  });
}

// ===== TECH STACK INFINITE SCROLLER =====
function initTechScroller() {
  const track = document.querySelector('.tech-scroller-track');
  if (!track) return;
  
  const firstSet = track.querySelector('.tech-scroller-set');
  if (!firstSet) return;
  
  // Clone the first set multiple times to ensure seamless loop
  const clones = 3; // Create 3 additional copies
  for (let i = 0; i < clones; i++) {
    const clone = firstSet.cloneNode(true);
    track.appendChild(clone);
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initTiltCards();
  initTechScroller();
});
