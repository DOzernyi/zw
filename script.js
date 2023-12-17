const flashcard = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const nextButton = document.getElementById('next-button');
const flashcardSetSelector = document.getElementById('flashcard-set-selector');

const flashcardsSet1 = [
    { front: 'Capital of France', back: ['Paris', 'Paris'] },
    { front: 'Largest desert in the world', back: ['Antarctica', 'Antarctica'] },
    { front: 'Longest river in the world', back: ['Nile', 'Nile'] },
];

const flashcardsSet2 = [
    { front: 'Question 1 Set 2', back: ['Answer 1 Set 2', 'Answer 1 Set 2'] },
    { front: 'Question 2 Set 2', back: ['Answer 2 Set 2', 'Answer 2 Set 2'] },
    // Add more flashcards for Set 2 as needed
];

const flashcardsGeography = [
    { front: 'Capital of Japan', back: ['Tokyo', 'Tokyo'] },
    { front: 'Highest mountain in the world', back: ['Mount Everest', 'Mount Everest'] },
    { front: 'Country with the most pyramids', back: ['Sudan', 'Sudan'] },
];

let currentCardIndex = 0;
let currentFlashcards = flashcardsSet1; // Default set
let isShowingFront = true;

function updateFlashcard() {
    const currentCard = currentFlashcards[currentCardIndex];
    flashcardFront.innerText = isShowingFront ? currentCard.front : '';
    
    // Display both in the custom font and Times New Roman on the back
    const backText = isShowingFront ? '' : currentCard.back.join(' / ');
    flashcardBack.innerHTML = `<div class="custom-font">${currentCard.back[0]}</div><div class="times-new-roman">${currentCard.back[1]}</div>`;
}

function showNextCard() {
    // Toggle back to front when moving to the next card
    isShowingFront = true;
    currentCardIndex = (currentCardIndex + 1) % currentFlashcards.length;
    updateFlashcard();
}

function toggleCardSide() {
    // Toggle between front and back when clicking on the card
    isShowingFront = !isShowingFront;
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
flashcard.addEventListener('click', toggleCardSide);
flashcardSetSelector.addEventListener('change', changeFlashcardSet);
