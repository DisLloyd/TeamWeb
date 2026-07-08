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
const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-card, .team-card, .tech-dome-item');
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

// Tech dome fade in (removed old tech-card animation)
gsap.fromTo('#tech-dome',
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#technologies',
      start: 'top 70%',
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

// ===== 3D TECH CLOUD GALLERY V2 =====
function initTechDome() {
  const container = document.getElementById('tech-sphere-v2');
  if (!container) {
    console.error('❌ Tech sphere container NOT FOUND');
    return;
  }

  console.log('🎯 Starting tech sphere initialization...');

  // Tech stack data with colored icon classes and proper colors
  const techs = [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#FFFFFF' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'npm', icon: 'fab fa-npm', color: '#CB3837' },
    { name: 'Laravel', icon: 'fab fa-laravel', color: '#FF2D20' }
  ];

  // Clear container completely
  container.innerHTML = '';
  container.style.perspective = '1200px';
  container.style.perspectiveOrigin = '50% 50%';

  // Create cloud container
  const cloud = document.createElement('div');
  cloud.id = 'tech-cloud-v2';
  cloud.style.position = 'absolute';
  cloud.style.top = '50%';
  cloud.style.left = '50%';
  cloud.style.width = '100%';
  cloud.style.height = '100%';
  cloud.style.transformStyle = 'preserve-3d';
  cloud.style.transform = 'translateX(-50%) translateY(-50%)';
  container.appendChild(cloud);

  const RADIUS = 350;
  const total = techs.length;

  console.log(`📦 Creating ${total} tech items with radius ${RADIUS}px`);

  // Create logos with proper 3D sphere distribution
  techs.forEach((tech, index) => {
    const item = document.createElement('div');
    item.className = 'tech-item-v2';
    
    // Golden angle spiral for even distribution
    const phi = Math.acos(1 - (2 * (index + 0.5)) / total);
    const theta = Math.PI * (1 + Math.sqrt(5)) * index;
    
    // Convert spherical to Cartesian coordinates
    const x = RADIUS * Math.sin(phi) * Math.cos(theta);
    const y = RADIUS * Math.sin(phi) * Math.sin(theta);
    const z = RADIUS * Math.cos(phi);
    
    console.log(`   ${index + 1}. ${tech.name}: x=${x.toFixed(0)}, y=${y.toFixed(0)}, z=${z.toFixed(0)}`);
    
    // Style the item
    item.style.position = 'absolute';
    item.style.left = '50%';
    item.style.top = '50%';
    item.style.width = '100px';
    item.style.height = '100px';
    item.style.marginLeft = '-50px';
    item.style.marginTop = '-50px';
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'center';
    item.style.transformStyle = 'preserve-3d';
    item.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    item.style.transition = 'all 0.3s ease';
    
    item.innerHTML = `
      <div style="font-size: 3.5rem; filter: drop-shadow(0 4px 20px rgba(218, 112, 214, 0.4)); transition: all 0.3s ease;">
        <i class="${tech.icon}" style="color: ${tech.color};"></i>
      </div>
      <div style="font-size: 0.75rem; font-weight: 600; color: #DA70D6; opacity: 0; transition: opacity 0.3s; margin-top: 0.5rem; background: rgba(10, 10, 10, 0.95); padding: 0.25rem 0.75rem; border-radius: 0.5rem; white-space: nowrap;">${tech.name}</div>
    `;
    
    // Hover effect
    item.addEventListener('mouseenter', () => {
      item.querySelector('div:last-child').style.opacity = '1';
      item.querySelector('i').style.filter = 'drop-shadow(0 0 30px rgba(218, 112, 214, 1))';
      item.querySelector('i').style.transform = 'scale(1.2)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.querySelector('div:last-child').style.opacity = '0';
      item.querySelector('i').style.filter = 'drop-shadow(0 4px 20px rgba(218, 112, 214, 0.4))';
      item.querySelector('i').style.transform = 'scale(1)';
    });
    
    cloud.appendChild(item);
  });

  console.log('✅ Tech sphere initialized successfully!');
  console.log(`� Container: ${container.offsetWidth}x${container.offsetHeight}px`);
  console.log(`☁️ Cloud items: ${cloud.children.length}`);

  // Auto-rotate animation
  let rotationY = 0;
  let rotationX = -15;
  let autoRotate = true;
  let animationId;

  function animate() {
    if (autoRotate) {
      rotationY += 0.25;
    }
    
    cloud.style.transform = `translateX(-50%) translateY(-50%) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    animationId = requestAnimationFrame(animate);
  }
  animate();

  console.log('🔄 Animation started');

  // Mouse interaction
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    autoRotate = false;
    previousMousePosition = { x: e.clientX, y: e.clientY };
    container.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;
      
      rotationY += deltaX * 0.5;
      rotationX -= deltaY * 0.3;
      
      rotationX = Math.max(-50, Math.min(20, rotationX));
      
      previousMousePosition = { x: e.clientX, y: e.clientY };
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      container.style.cursor = 'grab';
      setTimeout(() => { autoRotate = true; }, 2000);
    }
  });
}

// ===== TECH STACK SCROLL-BASED SCALE ANIMATION =====
function initTechStackScaleAnimation() {
  const techSection = document.getElementById('technologies');
  const techContainer = document.getElementById('tech-dome');
  
  if (!techSection || !techContainer) return;
  
  function handleScroll() {
    const rect = techSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    let visibilityRatio = 0;
    
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      const sectionHeight = rect.height;
      const sectionCenter = rect.top + sectionHeight / 2;
      const windowCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - windowCenter);
      const maxDistance = windowHeight / 2 + sectionHeight / 2;
      
      visibilityRatio = 1 - (distanceFromCenter / maxDistance);
      visibilityRatio = Math.max(0, Math.min(1, visibilityRatio));
      visibilityRatio = visibilityRatio * visibilityRatio * (3 - 2 * visibilityRatio);
    }
    
    const minScale = 0.5;
    const maxScale = 1;
    const finalScale = minScale + (maxScale - minScale) * visibilityRatio;
    
    techContainer.style.transform = `scale(${finalScale})`;
    techContainer.style.opacity = `${0.3 + (visibilityRatio * 0.7)}`;
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initTiltCards();
  initTechDome();
  initTechStackScaleAnimation();
});
