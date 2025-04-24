function scrollToSection() {
  const section = document.querySelector('.features');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
