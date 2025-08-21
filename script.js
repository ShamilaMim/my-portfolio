// Portfolio Skeleton JS
// - Mobile menu toggle
// - Theme toggle (dark/light)
// - Inject example project cards
// - Basic contact form handler (mailto fallback)

const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
const themeToggle = document.getElementById('themeToggle');
const yearEl = document.getElementById('year');

// Year
yearEl.textContent = new Date().getFullYear();

// Mobile menu
hamburger?.addEventListener('click', () => {
  const visible = getComputedStyle(navLinks).display !== 'none';
  if (visible) {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});

// Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.body.classList.toggle('light', savedTheme === 'light');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// Example projects (replace with your own)
const PROJECTS = [
  {
    title: "To‑Do App",
    desc: "Create, complete and filter your tasks. LocalStorage persistence.",
    img: "assets/img/project1-placeholder.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "#"
  },
  {
    title: "Weather App",
    desc: "Fetch real-time weather by city name using a public API.",
    img: "assets/img/project2-placeholder.jpg",
    tags: ["API", "JS", "Responsive"],
    live: "#",
    code: "#"
  },
  {
    title: "Restaurant Landing Page",
    desc: "A clean, fully responsive landing page for a restaurant.",
    img: "assets/img/project3-placeholder.jpg",
    tags: ["HTML", "CSS", "Grid"],
    live: "#",
    code: "#"
  }
];

const projectGrid = document.getElementById('projectGrid');
function renderProjects(list){
  projectGrid.innerHTML = list.map(p => `
    <article class="project-card">
      <img src="${p.img}" alt="${p.title}">
      <div class="content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="card-actions">
        <a class="btn ghost" href="${p.code}" target="_blank" rel="noopener">Code</a>
        <a class="btn" href="${p.live}" target="_blank" rel="noopener">Live</a>
      </div>
    </article>
  `).join('');
}
renderProjects(PROJECTS);

// Contact (EmailJS placeholder)
// To enable: create an EmailJS account and replace with your service/template IDs.
// For now we fallback to mailto link for demo.
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
  window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
});
