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