const list = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const emptyParagraph = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const spanParagraph = document.querySelector(".remaining span");
const emptyParagraphMessage = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";

const circle = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    emptyParagraph.innerText = placeholderLetters.join("");
};

circle(word);

button.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = textInput.value;
    console.log(guess);
    textInput.value ="";
});
