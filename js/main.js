/* ============================================================
   Personal Portfolio - Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActiveNav();
  initRevealOnScroll();
  initSkillBars();
});

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });

  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.textContent = '☰';
    });
  });
}

/* ---------- Active Nav Highlight ---------- */
function initActiveNav() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === filename) {
      link.classList.add('active');
    }
  });
}

/* ---------- Reveal on Scroll ---------- */
function initRevealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length === 0) return;

  // Add stagger delays for grid children
  const grids = document.querySelectorAll('.cards-grid');
  grids.forEach(grid => {
    Array.from(grid.children).forEach((child, index) => {
      if (child.classList.contains('reveal')) {
        child.style.transitionDelay = `${index * 0.1}s`;
      }
    });
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(el => observer.observe(el));
}

/* ---------- Skill Bars Animation ---------- */
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length === 0) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const level = bar.getAttribute('data-level');
          if (level) {
            setTimeout(() => {
              bar.style.width = `${level}%`;
            }, 200);
          }
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  skillBars.forEach(bar => observer.observe(bar));
}

/* ---------- Terminal Typing Effect (Home) ---------- */
function typeTerminal(element, text, speed = 40, onComplete = null) {
  if (!element) return;

  let index = 0;
  element.textContent = '';

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else if (onComplete) {
      onComplete();
    }
  }

  type();
}

// Expose for use in terminal animations
window.typeTerminal = typeTerminal;