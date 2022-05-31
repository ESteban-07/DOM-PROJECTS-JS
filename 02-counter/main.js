let counter = 0;
const paragraph = document.getElementById('demo');
const btnDecrease = document.getElementById('btn-1');
const btnReset = document.getElementById('btn-2');
const btnIncrease = document.getElementById('btn-3');

btnDecrease.addEventListener("click", decreaseCounter);
btnReset.addEventListener("click", resetCounter)
btnIncrease.addEventListener("click", increaseCounter);

function decreaseCounter() {
    return paragraph.innerHTML = --counter;
}

function resetCounter() {
    counter = 0;
    return paragraph.innerHTML = counter;
}

function increaseCounter() {
    return paragraph.innerHTML = ++counter;
}