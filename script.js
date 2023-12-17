const flashcard = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const nextButton = document.getElementById('next-button');

const flashcards = [
    { front: 'Question 1', back: 'Answer 1' },
    { front: 'Question 2', back: 'Answer 2' },
    // Add more flashcards as needed
];

let currentCardIndex = 0;

function updateFlashcard() {
    const currentCard = flashcards[currentCardIndex];
    flashcardFront.innerText = currentCard.front;
    flashcardBack.innerText = currentCard.back;
}

function showNextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    updateFlashcard();
}

// Initial setup
updateFlashcard();

// Event listener for the Next button
nextButton.addEventListener('click', showNextCard);
