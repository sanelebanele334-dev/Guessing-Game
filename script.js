let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let playAgain = document.getElementById("playAgain");
let guessInput = document.getElementById("guessInput");
let submitGuess = document.getElementById("submitGuess");
let feedback = document.getElementById("feedback");
let attemptsDisplay = document.getElementById("attemptsDisplay");

submitGuess.addEventListener("click", function() {
    let playerGuess = Number(guessInput.value);

    if (playerGuess < 1 || playerGuess > 100 || guessInput.value === "") {
        feedback.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    attemptsDisplay.textContent = "Attempts: " + attempts;

    if (playerGuess > secretNumber) {
        feedback.textContent = "Too high!";
    }
    else if (playerGuess < secretNumber) {
        feedback.textContent = "Too low!";
    }
    else {
        feedback.textContent = "Correct! 🎉";
        submitGuess.disabled = true;
        guessInput.disabled = true;
    }

    guessInput.value = "";
});

playAgain.addEventListener("click", function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    guessInput.value = "";
    feedback.textContent = "";
    attemptsDisplay.textContent = "Attempts: 0";

    guessInput.disabled = false;
    submitGuess.disabled = false;
});

guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitGuess.click();
    }
});
