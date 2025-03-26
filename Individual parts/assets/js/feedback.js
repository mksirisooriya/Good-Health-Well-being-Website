
//Validation part- stars

// This is to selct all star inputs
const starInputs = document.querySelectorAll('.input-group .stars input');

// Event listener to each star input
starInputs.forEach((starInput) => {
starInput.addEventListener('change', () => {
const starValue = starInput.id.split('-')[1]; // Get the numeric value of the star rating
const starLabels = document.querySelectorAll('.input-group .stars label');

// Remove 'active' class from all star labels
starLabels.forEach((label) => {
    label.classList.remove('active');
});

// Add 'active' to selected star and all stars before it
for (let i = starValue; i >= 1; i--) {
    const selectedLabel = document.querySelector(`.input-group .stars label[for="rate-${i}"]`);
    if (selectedLabel) {
    selectedLabel.classList.add('active');
    }
}
});
});

//Validation part form

function validateForm() {
const errorMessages = document.getElementById('error-messages');
errorMessages.innerHTML = ''; // Clear previous error messages

let isValid = true;

// Validate name field
const nameInput = document.getElementById('name');
if (nameInput.value.trim() === '') {
isValid = false;
errorMessages.innerHTML += '<p>Name is required</p>';
}

// Validate email field
const emailInput = document.getElementById('email');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
if (emailInput.value.trim() !== '' && !emailRegex.test(emailInput.value.trim())) {
  isValid = false;
  errorMessages.innerHTML += '<p>Please enter a valid email address</p>';
}

// Validate first visit radio buttons
const firstVisitRadios = document.querySelectorAll('input[name="firstvisit"]');
let firstVisitChecked = false;
firstVisitRadios.forEach((radio) => {
if (radio.checked) {
    firstVisitChecked = true;
}
});
if (!firstVisitChecked) {
isValid = false;
errorMessages.innerHTML += '<p>Please indicate if this is your first visit</p>';
}

// Validate easy to navigate radio buttons
const easyToNavigateRadios = document.querySelectorAll('input[name="easytonavigate"]');
let easyToNavigateChecked = false;
easyToNavigateRadios.forEach((radio) => {
if (radio.checked) {
    easyToNavigateChecked = true;
}
});
if (!easyToNavigateChecked) {
isValid = false;
errorMessages.innerHTML += '<p>Please indicate if the website was easy to navigate</p>';
}

// Validate star rating
const starRatingChecked = document.querySelector('.input-group .stars input:checked');
if (!starRatingChecked) {
isValid = false;
errorMessages.innerHTML += '<p>Please rate your experience</p>';
}

return isValid;
}

//reset function
function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.querySelectorAll('input[name="firstvisit"]').forEach((radio) => {
      radio.checked = false;
    });
    document.querySelectorAll('input[name="easytonavigate"]').forEach((radio) => {
      radio.checked = false;
    });
    document.getElementById('improvements').value = '';
    document.querySelectorAll('.input-group .stars input').forEach((star) => {
      star.checked = false;
    });
    document.getElementById('additionalques').value = '';
  }

const previewBtn = document.getElementById('previewBtn');
const previewSection = document.getElementById('preview-section');

previewBtn.addEventListener('click', () => {
if (validateForm()) {
// Populate the preview section with the form data
const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    firstVisit: document.querySelector('input[name="firstvisit"]:checked').value,
    easyToNavigate: document.querySelector('input[name="easytonavigate"]:checked').value,
    improvements: document.getElementById('improvements').value,
    starRating: document.querySelector('.input-group .stars input:checked')?.id.split('-')[1] || 'Not rated',
    additionalQuestions: document.getElementById('additionalques').value,
};
// Populate the preview section with the form data
populatePreviewModal(formData);

// Show the preview modal
const previewModal = document.getElementById('preview-modal');
previewModal.style.display = 'block';
}
});

function populatePreviewModal(formData) {
document.getElementById('preview-name').textContent = formData.name;
document.getElementById('preview-email').textContent = formData.email;
document.getElementById('preview-first-visit').textContent = formData.firstVisit;
document.getElementById('preview-easy-to-navigate').textContent = formData.easyToNavigate;
document.getElementById('preview-improvements').textContent = formData.improvements;
document.getElementById('preview-star-rating').textContent = formData.starRating;
document.getElementById('preview-additional-questions').textContent = formData.additionalQuestions;
}

// Add event listener for the close button
const closeBtn = document.querySelector('.modal .close');
closeBtn.addEventListener('click', () => {
const previewModal = document.getElementById('preview-modal');
previewModal.style.display = 'none';
});

// Add event listener for the edit button
const editBtn = document.getElementById('edit-btn');
editBtn.addEventListener('click', () => {
const previewModal = document.getElementById('preview-modal');
previewModal.style.display = 'none';
});

// Add event listener for the submit button and clear form data as well as opening email client with submitted data
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', () => {
  alert('Thank you for your feedback!');
  const name = encodeURIComponent(document.getElementById('name').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const firstVisit = encodeURIComponent(document.querySelector('input[name="firstvisit"]:checked').value);
  const easyToNavigate = encodeURIComponent(document.querySelector('input[name="easytonavigate"]:checked').value);
  const improvements = encodeURIComponent(document.getElementById('improvements').value);
  const starRating = encodeURIComponent(document.querySelector('.input-group .stars input:checked')?.id.split('-')[1] || 'Not rated');
  const additionalQuestions = encodeURIComponent(document.getElementById('additionalques').value);

  const mailtoUrl = `mailto:matheesha.20230143@iit.ac.lk?subject=Feedback-Form-Submission&body=Here%20is%20the%20feedback:%0A%0AName:%20${name}%0AEmail:%20${email}%0AFirst%20Visit:%20${firstVisit}%0AEasy%20to%20Navigate:%20${easyToNavigate}%0AImprovements:%20${improvements}%0AStar%20Rating:%20${starRating}%0AAdditional%20Questions:%20${additionalQuestions}`;
  window.location.href = mailtoUrl;
  setTimeout(() => {
    resetForm();
  }, 1000);// Delay the opening of the email client by 1 second

  // Close the preview modal if it's open
  const previewModal = document.getElementById('preview-modal');
  if (previewModal.style.display !== 'none') {
    previewModal.style.display = 'none';
  }
});