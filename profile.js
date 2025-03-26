const prompts = [
    { step: 1, title: 'Personal Details', questions: ['Name', 'Surname', 'Age', 'Gender', 'Do you agree with the terms and conditions?'] },
    { step: 2, title: 'Contact Information', questions: ['Email', 'Phone Number', 'Address', 'City', 'Country'] },
    { step: 3, title: 'Professional Information', questions: ['Area of Study:', 'Highest degree:', 'University:', 'Completion Year:', 'Country:'] },
    { step: 4, title: 'Availability', questions: ['Availability for volunteering:', 'Surname:', 'Tel. :', 'Email'] },
];
let currentStep = 1;
let currentQuestionIndex = 0;
let profileCompletion = 0;

const startBtn = document.getElementById('startBtn');
const progressInfo = document.getElementById('progress-info');
const progressBarContainer = document.getElementById('progress-container');
const promptsContainer = document.getElementById('prompts');
const outputContainer = document.getElementById('output');

const renderPrompt = () => {
    const currentPrompt = prompts.find(prompt => prompt.step === currentStep);
    const question = currentPrompt.questions[currentQuestionIndex];
    const promptElement = document.createElement('div');
    promptElement.innerHTML = `
        <h2>Step ${currentStep}: ${currentPrompt.title} | Question ${currentQuestionIndex + 1}/${currentPrompt.questions.length}</h2>
        <p>${question}</p>
        <input type="text" id="answer" onchange="validateInput('${question}')">
        <button id="nextBtn" onclick="submitAnswer()" disabled>Next</button>
        <button onclick="backToPreviousStep()">Back</button>
        <button onclick="skipQuestion()" ${question === 'Name' || question === 'Surname' ? 'disabled' : ''}>Skip</button>
    `;
    promptsContainer.innerHTML = '';
    promptsContainer.appendChild(promptElement);
    if (currentStep !== 1 || currentQuestionIndex !== 0) {
        outputContainer.style.display = 'block';
    }
};

const validateInput = (question) => {
    const answer = document.getElementById('answer').value.trim();
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = answer === '' && !(question === 'Name' || question === 'Surname');
};

const submitAnswer = () => {
    const answer = document.getElementById('answer').value.trim();
    if (answer === '') {
        alert('Please Enter Valid input or skip this question.');
        return;
    }
    const outputElement = document.getElementById('output');

    const currentPrompt = prompts.find(prompt => prompt.step === currentStep);
    const question = currentPrompt.questions[currentQuestionIndex];
    let userProfile = '';

    switch (question) {
        case 'Name':
        case 'Surname':
            if (/\d/.test(answer)) {
                alert('Names cannot contain numbers. Please enter a valid name.');
                return;
            }
            break;
        case 'Age':
            if (isNaN(answer) || answer < 1 || answer > 110) {
                alert('Impossible age!! Please enter age between 1 and 110.');
                return;
            }
            break;
        case 'Email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(answer)) {
                alert('Please enter valid email with correct format!');
                return;
            }
            break;
        case 'Phone Number':
        case 'Tel.':
            if (isNaN(answer)) {
                alert('Phone number should only contain numbers.');
                return;
            }
            break;
        case 'Completion Year':
            if (isNaN(Number(answer)) || !Number.isInteger(Number(answer)) || Number(answer) < 1900 || Number(answer) > 2050) {
                alert('Please enter a valid year between 1900 and 2050.');
                return;
            }
            break;
        case 'Gender':
            if (!['male', 'female', 'other'].includes(answer.toLowerCase())) {
                alert('Please enter valid gender - (male, female, or other).');
                return;
            }
            break;
        case 'Do you agree with the terms and conditions?':
            if (!['yes', 'no'].includes(answer.toLowerCase())) {
                alert('Not Valid Input! Please enter "yes" or "no".');
                return;
            }
            break;
        case 'City':
        case 'Country':
        case 'Area of Study:':
        case 'Highest degree:':
        case 'University:':
        case 'Availability for volunteering:':
        case 'Surname:':
            if (/\d/.test(answer)) {
                alert('This field should only contain letters.');
                return;
            }
            break;
    }

    userProfile = `${question}: ${answer}`;
    outputElement.innerHTML += `<p>${userProfile}</p>`;

    profileCompletion += 100 / (prompts.length * currentPrompt.questions.length);
    currentQuestionIndex++;

    if (currentQuestionIndex === currentPrompt.questions.length) {
        currentStep++;
        currentQuestionIndex = 0;
        outputElement.innerHTML += '<hr style="border-top: 2px solid green;">';
    }

    if (profileCompletion >= 100) {
        profileCompletion = 100;
        updateProgress();
        promptsContainer.innerHTML = '<p>Profile completed!</p>';
    } else {
        renderPrompt();
        updateProgress();
    }
};

const backToPreviousStep = () => {
    if (currentQuestionIndex === 0) {
        currentStep--;
        const prevPrompt = prompts.find(prompt => prompt.step === currentStep);
        currentQuestionIndex = prevPrompt.questions.length - 1;
    } else {
        currentQuestionIndex--;
    }
    renderPrompt();
};


const skipQuestion = () => {
    const currentPrompt = prompts.find(prompt => prompt.step === currentStep);
    const currentQuestion = currentPrompt.questions[currentQuestionIndex];

    if (currentQuestion === 'Name' || currentQuestion === 'Surname') {
        alert('Please enter your name and surname before skipping.');
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex === currentPrompt.questions.length) {
        currentStep++;
        currentQuestionIndex = 0;
    }
    updateProgress();

    if (profileCompletion >= 100) {
        profileCompletion = 100;
        promptsContainer.innerHTML = '<p>Profile completed!</p>';
    } else {
        renderPrompt();
    }
};


const updateProgress = () => {
    const progressBar = document.getElementById('progress-bar');
    const completionPercentage = document.getElementById('completion-percentage');

    progressBar.style.width = `${profileCompletion}%`;
    completionPercentage.textContent = `${Math.round(profileCompletion)}%`;
};

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    progressInfo.style.display = 'block';
    progressBarContainer.style.display = 'block';
    promptsContainer.style.display = 'block';
    renderPrompt();
    updateProgress();
});
