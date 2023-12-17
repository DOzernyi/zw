const flashcard = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const nextButton = document.getElementById('next-button');
const flipButton = document.getElementById('flip-button');
const flashcardSetSelector = document.getElementById('flashcard-set-selector');

const flashcardsSet1 = [
    { front: 'Capital of France', back: ['Paris'] },
    { front: 'Largest desert in the world', back: ['Antarctica'] },
    { front: 'Longest river in the world', back: ['Nile'] },
];

const flashcardsSet2 = [
    { front: 'Question 1 Set 2', back: ['Answer 1 Set 2'] },
    { front: 'Question 2 Set 2', back: ['Answer 2 Set 2'] },
    // Add more flashcards for Set 2 as needed
];

const flashcardsGeography = [
    { front: 'Capital of Japan', back: ['Tokyo'] },
    { front: 'Highest mountain in the world', back: ['Mount Everest'] },
    { front: 'Country with the most pyramids', back: ['Sudan'] },
];

let currentCardIndex = 0;
let currentFlashcards = flashcardsSet1; // Default set
let isShowingFront = true;

function updateFlashcard() {
    const currentCard = currentFlashcards[currentCardIndex];
    flashcardFront.innerText = isShowingFront ? currentCard.front : '';

    // Display the back of the card without custom font
    const backText = isShowingFront ? '' : currentCard.back.join(' / ');
    flashcardBack.innerText = backText;

    // Hide or show the back of the card
    flashcardBack.style.display = isShowingFront ? 'none' : 'flex';
}

function showBack() {
    isShowingFront = false;
    updateFlashcard();
}

function showNextCard() {
    isShowingFront = true;
    currentCardIndex = (currentCardIndex + 1) % currentFlashcards.length;
    updateFlashcard();
}

function changeFlashcardSet() {
    if (flashcardSetSelector.value === 'set1') {
        currentFlashcards = flashcardsSet1;
    } else if (flashcardSetSelector.value === 'set2') {
        currentFlashcards = flashcardsSet2;
    } else if (flashcardSetSelector.value === 'geography') {
        currentFlashcards = flashcardsGeography;
    }

    // Reset card index and update the displayed card
    currentCardIndex = 0;
    isShowingFront = true;
    updateFlashcard();
}

// Initial setup
updateFlashcard();

// Event listeners
nextButton.addEventListener('click', showNextCard);
flipButton.addEventListener('click', showBack);
flashcardSetSelector.addEventListener('change', changeFlashcardSet);
