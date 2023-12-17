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

function showFront() {
    isShowingFront = true;
    updateFlashcard();
}

function showBack() {
    isShowingFront = false;
    updateFlashcard();
}

function updateFlashcard() {
    const currentCard = currentFlashcards[currentCardIndex];
    flashcardFront.innerText = isShowingFront ? currentCard.front : '';
    flashcardBack.innerText = isShowingFront ? '' : currentCard.back.join(' / ');
}

function showNextCard() {
    currentCardIndex = (currentCardIndex + 1) % currentFlashcards.length;
    showFront();
}

function changeFlashcardSet() {
    if (flashcardSetSelector.value === 'set1') {
        currentFlashcards = flashcardsSet1;
    } else if (flashcardSetSelector.value === 'set2') {
        currentFlashcards = flashcardsSet2;
    } else if (flashcardSetSelector.value === 'geography') {
        currentFlashcards = flashcardsGeography;
    }

    // Reset card index and show the front of the card
    currentCardIndex = 0;
    showFront();
}

// Initial setup
showFront();

// Event listeners
nextButton.addEventListener('click', showNextCard);
flipButton.addEventListener('click', showBack);
flashcardSetSelector.addEventListener('change', changeFlashcardSet);
