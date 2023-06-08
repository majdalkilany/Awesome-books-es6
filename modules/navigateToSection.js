import DOMElements from './DOMElements.js';

const domElements = new DOMElements();
const sections = document.querySelectorAll('.content');

const navigateToSection = (sectionId) => {
  const sections = document.querySelectorAll('.content');
  const section = document.querySelector(`#${sectionId}`);
  sections.forEach((s) => {
    if (s !== section) {
      s.classList.remove('active');
      s.style.display = 'none'; // hide non-active sections
    }
  });

  section.classList.add('active');
  section.style.display = 'block'; // show active section

  // Handle special cases for Add and List sections
  if (sectionId === 'add') {
    domElements.header.textContent = 'Awesome Books';
    domElements.form.style.display = 'block';
    domElements.bookDisplay.style.display = 'none';
  } else if (sectionId === 'list') {
    domElements.header.textContent = 'Awesome Books';
    domElements.form.style.display = 'none';
    domElements.bookDisplay.style.display = 'block';
  } else {
    // Reset header and hide form and book display for other sections
    domElements.header.textContent = ' Awesome Books';
    domElements.form.style.display = 'none';
    domElements.bookDisplay.style.display = 'none';
  }
};

const links = document.querySelectorAll('nav a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    navigateToSection(sectionId.substr(1));
  });
});

export default navigateToSection;
