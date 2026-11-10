// EDIT THESE LINKS to customize your site.
const config = {
  githubUsername: 'harrisonlin12345',
  linkedinUrl: 'https://www.linkedin.com/in/harrisonylin/',
  email: 'hlin467@gatech.edu',
  repositories: {
    'midi-dj-controller': '',
    'fpga-uart-transceiver': '',
    'guitar-distortion-pedal': ''
  }
};

const pages = [...document.querySelectorAll('.page')];
const navLinks = [...document.querySelectorAll('.nav-links a')];
function showPage() {
  const requested = location.hash.slice(1).toLowerCase();
  const page = pages.some(el => el.id === requested) ? requested : 'home';
  pages.forEach(el => { el.classList.toggle('active', el.id === page); });
  navLinks.forEach(el => {
    const active = el.dataset.page === page;
    el.classList.toggle('active', active);
    if (active) el.setAttribute('aria-current', 'page');
    else el.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', showPage);
showPage();
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('github-link').href = `https://github.com/${config.githubUsername}`;
document.getElementById('linkedin-link').href = config.linkedinUrl;
document.getElementById('email-link').href = `mailto:${config.email}`;
for (const link of document.querySelectorAll('.repo-link')) {
  const url = config.repositories[link.dataset.repo];
  if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  else { link.textContent = 'Repository coming soon'; link.removeAttribute('href'); link.classList.add('unavailable'); }
}
