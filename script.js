// Theme toggle -------------------------------------------------
const THEME_KEY = 'portfolio-theme';
const saved = localStorage.getItem(THEME_KEY);
if (saved === 'nerv') document.documentElement.setAttribute('data-theme', 'nerv');

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'nerv' ? '' : 'nerv';
  if (next) root.setAttribute('data-theme', next);
  else root.removeAttribute('data-theme');
  localStorage.setItem(THEME_KEY, next);
  updateToggleLabel();
}

function updateToggleLabel() {
  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  const active = document.documentElement.getAttribute('data-theme') === 'nerv';
  btn.textContent = active ? 'PAPER' : 'NERV';
}

// Live timestamp for the rail ---------------------------------
function tickClock() {
  const el = document.querySelector('[data-clock]');
  if (!el) return;
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  el.textContent =
    `T-${pad(d.getHours())}${pad(d.getMinutes())}.${pad(d.getSeconds())}`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateToggleLabel();
  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) toggle.addEventListener('click', toggleTheme);

  tickClock();
  setInterval(tickClock, 1000);

  // Photo filter buttons (photography page)
  const filters = document.querySelectorAll('[data-filter]');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });
});
