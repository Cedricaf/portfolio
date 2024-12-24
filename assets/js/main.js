function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;
});

