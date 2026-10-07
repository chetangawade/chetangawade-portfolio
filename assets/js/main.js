/* =========================================================
   Chetan Gawade - Portfolio scripts (no libraries)
   ========================================================= */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Mobile menu ---------- */
const navMenu = $('#nav-menu');
const navToggle = $('#nav-toggle');

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.innerHTML = open ? "<i class='bx bx-x'></i>" : "<i class='bx bx-menu'></i>";
});
$$('.nav__link').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('show');
  navToggle.setAttribute('aria-expanded', false);
  navToggle.innerHTML = "<i class='bx bx-menu'></i>";
}));

/* ---------- Light / dark theme ---------- */
const themeBtn = $('#theme-toggle');
const setThemeIcon = () => {
  const dark = document.documentElement.dataset.theme !== 'light';
  themeBtn.innerHTML = dark ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
};
themeBtn.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked - ignore */ }
  setThemeIcon();
});
setThemeIcon();

/* ---------- Header border, active link, back-to-top ---------- */
const header = $('#header');
const toTop = $('#to-top');
const sections = $$('main section[id]');

const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 10);
  toTop.classList.toggle('show', y > 600);

  let current = '';
  sections.forEach(sec => { if (y >= sec.offsetTop - 120) current = sec.id; });
  $$('.nav__link').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.addEventListener('click', () => window.scrollTo({ top: 0 }));

/* ---------- Typing effect in hero ---------- */
const roles = ['DevOps Engineer', 'AWS Solutions Architect', 'Kubernetes & Istio', 'CI/CD Automation', 'Terraform IaC'];
const typed = $('#typed');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typed && !reduceMotion) {
  let r = 0, i = roles[0].length, deleting = true;
  const tick = () => {
    const word = roles[r];
    typed.textContent = word.slice(0, i);
    if (deleting) {
      i--;
      if (i < 0) { deleting = false; r = (r + 1) % roles.length; i = 0; }
    } else {
      i++;
      if (i > roles[r].length) { deleting = true; i = roles[r].length; return setTimeout(tick, 1800); }
    }
    setTimeout(tick, deleting ? 40 : 85);
  };
  setTimeout(tick, 2200);
}

/* ---------- Reveal on scroll ---------- */
const revealEls = $$('.stat, .about__text, .about__facts, .job, .card, .skill-group, .cert, .edu li, .achievements li, .web-card, .contact__info, .contact__form');
revealEls.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('visible'));
}

/* ---------- Contact form (static site → opens email app) ---------- */
const form = $('#contact-form');
const note = $('#form-note');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    note.textContent = 'Please fill in your name, a valid email and a message.';
    note.classList.add('error');
    return;
  }
  note.classList.remove('error');
  note.textContent = 'Opening your email app…';

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n- ${name} (${email})`);
  window.location.href = `mailto:chetangawde999@gmail.com?subject=${subject}&body=${body}`;
});

/* ---------- Footer year ---------- */
$('#year').textContent = new Date().getFullYear();
