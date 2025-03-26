// change to shadow when navbar scroll
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//change active link part(Select Current page in nav bar)
// Get all navigation links
const navLinks = document.querySelectorAll('.navigation li a');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');
    });
});