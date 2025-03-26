document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;
            if (section.id === 'section1' || section.id === 'section3') {
                section.classList.add('animateX');
            } else if (section.id === 'section2') {
                section.classList.add('animateY');
            }
            observer.unobserve(section);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

