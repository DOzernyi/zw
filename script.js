const flashcard = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const nextButton = document.getElementById('next-button');
const flipButton = document.getElementById('flip-button');
const flashcardSetSelector = document.getElementById('flashcard-set-selector');

const flashcards = {
  set1: [
    { front: 'Capital of France', back: ['Paris'] },
    { front: 'Largest desert in the world', back: ['Antarctica'] },
    { front: 'Longest river in the world', back: ['Nile'] },
  ],
  set2: [
    { front: 'Question 1 Set 2', back: ['Answer 1 Set 2'] },
    { front: 'Question 2 Set 2', back: ['Answer 2 Set 2'] },
    // Add more flashcards for Set 2 as needed
  ],
  geography: [
    { front: 'Capital of Japan', back: ['Tokyo'] },
    { front: 'Highest mountain in the world', back: ['Mount Everest'] },
    { front: 'Country with the most pyramids', back: ['Sudan'] },
  ],
};

let currentCardIndex = 0;
let currentFlashcards = flashcards.set1; // Default set

function updateFlashcard() {
  const currentCard = currentFlashcards[currentCardIndex];
  flashcardFront.innerText = isShowingFront ? currentCard.front : '';
  flashcardBack.innerText = isShowingFront ? '' : currentCard.back.join(' / ');
  flashcardBack.style.display = isShowingFront ? 'none' : 'flex';
}

function showFront() {
  isShowingFront = true;
  updateFlashcard();
}

function showBack() {
  isShowingFront = false;
  updateFlashcard();
}

function showNextCard() {
  currentCardIndex = (currentCardIndex + 1) % currentFlashcards.length;
  showFront();
}

function changeFlashcardSet() {
  const selectedSet = flashcardSetSelector.value;
  currentFlashcards = flashcards[selectedSet] || [];
  currentCardIndex = 0;
  showFront();
}

// Initial setup
showFront();

// Event listeners
nextButton.addEventListener('click', showNextCard);
flipButton.addEventListener('click', showBack);
flashcardSetSelector.addEventListener('change', changeFlashcardSet);
