// Get the counter element
const countElement = document.getElementById('count');

// Initial counter value
let countValue = 0;

// Function to increment the counter
function increment() {
    countValue++;
    updateCounter();
}

// Function to decrement the counter
function decrement() {
    countValue--;
    updateCounter();
}

// Function to reset the counter
function reset() {
    countValue = 0;
    updateCounter();
}

// Function to update the counter value in the DOM
function updateCounter() {
    countElement.textContent = countValue;
}
