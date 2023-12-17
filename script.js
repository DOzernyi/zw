document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const flashcardSetSelector = document.getElementById('flashcard-set-selector');
    const flashcardFront = document.getElementById('flashcard-front');
    const flashcardBack = document.getElementById('flashcard-back');
    const nextButton = document.getElementById('next-button');
    const flipButton = document.getElementById('flip-button');

    // Flashcard sets
    const flashcardSets = {
        set1: { front: 'Front 1', back: 'Back 1' },
        set2: { front: 'Front 2', back: 'Back 2' },
        geography: { front: 'Geography Front', back: 'Geography Back' }
    };

    // Initialize flashcard
    let currentSet = flashcardSets[flashcardSetSelector.value];
    updateFlashcard(currentSet);

    // Event listeners
    flashcardSetSelector.addEventListener('change', function () {
        currentSet = flashcardSets[this.value];
        updateFlashcard(currentSet);
    });

    flipButton.addEventListener('click', function () {
        flipFlashcard();
    });

    nextButton.addEventListener('click', function () {
        // Implement logic to move to the next flashcard if needed
        // For simplicity, it will just flip the current flashcard
        flipFlashcard();
    });

    // Function to update flashcard content
    function updateFlashcard(set) {
        flashcardFront.textContent = set.front;
        flashcardBack.textContent = set.back;
        // Ensure the front is visible when updating the flashcard content
        flashcardFront.style.transform = 'rotateY(0deg)';
    }

    // Function to flip the flashcard
    function flipFlashcard() {
        flashcardFront.style.transform = 'rotateY(180deg)';
        flashcardBack.style.transform = 'rotateY(0deg)';
    }
});
