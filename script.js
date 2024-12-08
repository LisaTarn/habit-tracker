//* Quotes Rotation 
const quoteElement = document.getElementById("quote");
const quotes = [
    "Consistency is the key to success.",
    "Small steps lead to big changes.",
    "Your habits define your future.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Start where you are. Use what you have. Do what you can.",
    "Your future is created by what you do today, not tomorrow.",
    "Motivation gets you started, but habits keep you going."
];

let currentIndex = 0;

function updateQuote(index) {
    quoteElement.textContent = quotes[index];
}

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentIndex = randomIndex;
    updateQuote(currentIndex);
}

document.getElementById("prevQuote").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    updateQuote(currentIndex);
});
document.getElementById("nextQuote").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    updateQuote(currentIndex);
});

displayRandomQuote();

//*Contact Form Validation
const form = document.getElementById('registerForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting for now
    console.log('Form submitted!', event); // Check if form submission is working
});


const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    // Clear any previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = ''; 

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please Enter your Name';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please Enter your Email';
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please Enter a Valid Email Address';
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please Enter your Message';
        isValid = false;
    }


    // If all inputs are valid, show success message
    if (isValid) {
        successMessage.textContent = 'Message Sent Successfully! We Will try to reach you in 7-14 business days. ';
        alert('Your Message has been Sent ' );
    }

    event.preventDefault(); // Prevent form from actually submitting
});


// Function to validate email format
function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
return re.test(String(email).toLowerCase());
}
