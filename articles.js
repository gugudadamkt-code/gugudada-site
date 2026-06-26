(function() {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.main-nav');
  const label = document.querySelector('.menu-toggle-label');
  if (!menuToggle || !nav || !label) return;

  function setOpen(isOpen) {
    menuToggle.checked = isOpen;
    if (isOpen) {
      nav.classList.add('open');
    } else {
      nav.classList.remove('open');
    }
    label.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  setOpen(false);

  menuToggle.addEventListener('change', () => {
    setOpen(menuToggle.checked);
  });

  label.addEventListener('click', function() {
    requestAnimationFrame(() => {
      setOpen(menuToggle.checked);
    });
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      setOpen(false);
    });
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') &&
        !nav.contains(e.target) &&
        !label.contains(e.target)) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
    }
  });
})();

// Contact form handler
function handleContactForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-send');
  const original = btn.textContent;
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Mensagem enviada! ✓';
    btn.style.background = 'var(--green)';
    e.target.reset();

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
    }, 1800);
  }, 700);
}

// Fade in for sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, .article-content');
  sections.forEach((section, i) => {
    section.style.opacity = '0';
    section.style.transition = 'opacity 0.6s ease ' + (i * 0.1) + 's';
    setTimeout(() => {
      section.style.opacity = '1';
    }, 100);
  });
});
