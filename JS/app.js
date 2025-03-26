// Function to change background color
function changeBackgroundColor(color) {
    var colorChange = color.value;
    document.body.style.backgroundColor = colorChange;
}

// Function to change font style to serif
function changeFontSerif() {
    // Select all elements with class 'card-content'
    var cardContents = document.querySelectorAll('.card-content');

    // Loop through each card content element
    cardContents.forEach(function(content) {
        // Set font-family to serif
        content.style.fontFamily = 'serif';
    });
}

// Function to change font style to sans-serif
function changeFontSansSerif() {
    // Select all elements with class 'card-content'
    var cardContents = document.querySelectorAll('.card-content');

    // Loop through each card content element
    cardContents.forEach(function(content) {
        // Set font-family to sans-serif
        content.style.fontFamily = 'sans-serif';
    });
}

// Function to change font style to monospace
function changeFontMonospace() {
    // Select all elements with class 'card-content'
    var cardContents = document.querySelectorAll('.card-content');

    // Loop through each card content element
    cardContents.forEach(function(content) {
        // Set font-family to monospace
        content.style.fontFamily = 'monospace';
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let scrollContainer = document.querySelector(".photobar");
    let back = document.getElementById("back");
    let next = document.getElementById("next");
    let images = document.querySelectorAll(".img-holder img");

    // Add event listener for mouse wheel scrolling
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    // Add event listener for the back button
    back.addEventListener("click", () => {
        scrollContainer.scrollLeft -= 50;
    });

    // Add event listener for the next button
    next.addEventListener("click", () => {
        scrollContainer.scrollLeft += 50; 
    });

    // Thumbnail click to expand view
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            expandImage(this); // Call the expandImage function with the clicked image
        });
    });

    // Function to expand the clicked image
    function expandImage(img) {
        // Extract information from adjacent card content
        const title = img.parentElement.nextElementSibling.querySelector('h2').textContent;
        const info = img.parentElement.nextElementSibling.querySelector('p').textContent;
        
        // Populate the extended view elements
        const extendedView = document.querySelector('.extended-view');
        extendedView.querySelector('.image-title').textContent = title;
        extendedView.querySelector('.image-description').textContent = info;
        
        // Update the extended view image
        const imgSrc = img.src;
        extendedView.querySelector('.extended-image').src = imgSrc;
        extendedView.querySelector('.extended-image').alt = title;
        
        // Show the extended view
        extendedView.style.display = 'block';
    }

    // Close button functionality
    document.querySelector('.close-button').addEventListener('click', function() {
        document.querySelector('.extended-view').style.display = 'none';
    });
});
