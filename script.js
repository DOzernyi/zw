let isFlipped = false;
let currentCard = 1;
const totalCards = 3; // Change this to the total number of flashcards

function flipCard() {
    const flashcard = document.querySelector('.flashcard');
    isFlipped = !isFlipped;

    const rotation = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    flashcard.style.transform = rotation;
}

function nextCard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.style.transform = 'rotateY(0deg)';
    isFlipped = false;

    currentCard = (currentCard % totalCards) + 1;
    updateCardContent(currentCard);
}

function updateCardContent(cardNumber) {
    const frontContent = document.querySelector('.flashcard-front p');
    const backContent = document.querySelector('.flashcard-back p');

    // Customize the content based on the card number
    switch (cardNumber) {
        case 1:
            frontContent.textContent = "Flashcard 1 - Front Content";
            backContent.textContent = "Flashcard 1 - Back Content";
            break;
        case 2:
            frontContent.textContent = "Flashcard 2 - Front Content";
            backContent.textContent = "Flashcard 2 - Back Content";
            break;
        case 3:
            frontContent.textContent = "Flashcard 3 - Front Content";
            backContent.textContent = "Flashcard 3 - Back Content";
            break;
        // Add more cases as needed

        default:
            break;
    }
}

// Initialize with the first card
updateCardContent(currentCard);
