// Variables
let counter = 0;
const paragraph = document.getElementById('demo');
const btnDecrease = document.getElementById('btn-1');
const btnReset = document.getElementById('btn-2');
const btnIncrease = document.getElementById('btn-3');

// Event Listeners
btnDecrease.addEventListener('click', decreaseCounter);
btnReset.addEventListener('click', resetCounter);
btnIncrease.addEventListener('click', increaseCounter);

// Functions
function decreaseCounter() {
    --counter;
    colorCounter(counter);
    return (paragraph.innerHTML = counter);
}

function resetCounter() {
    counter = 0;
    colorCounter(counter);
    return (paragraph.innerHTML = counter);
}

function increaseCounter() {
    ++counter;
    colorCounter(counter);
    return (paragraph.innerHTML = counter);
}

function colorCounter(value) {
    let result;
    if (value > 0) {
        result = paragraph.style.color = 'green';
    }
    if (value < 0) {
        result = paragraph.style.color = 'red';
    }
    if (value == 0) {
        result = paragraph.style.color = '#222222';
    }
    return result;
}
