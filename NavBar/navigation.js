const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    document.getElementById('profile-link').click();
});

const navLinks = document.querySelectorAll('.navigation li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});