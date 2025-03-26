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

//change active link part

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

//parallax part

const title = document.querySelector('#title')
const leaf1 = document.querySelector('#leaf1')
const leaf2 = document.querySelector('#leaf2')
const bush2 = document.querySelector('#bush2')
const mount1 = document.querySelector('#mount1')
const mount2 = document.querySelector('#mount2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})