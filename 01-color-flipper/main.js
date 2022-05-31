// Variables
const arrayColors = ['Red', 'Green', 'Rgba(133,122,200)', '#F15025'];
const arrayHexCode = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];
const paragraph = document.getElementById('demo');
const span = document.getElementById('span');
const btnRandom = document.getElementById('btn-1');
const btnHex = document.getElementById('btn-2');
const btnReset = document.getElementById('btn-3');

// Event Listeners
btnRandom.addEventListener('click', randomBackground);
btnHex.addEventListener('click', hexadecimalBackground);
btnReset.addEventListener('click', defaultColor);

// Functions
function randomBackground() {
    const random = randomNumber(arrayColors.length);
    document.body.style.background = arrayColors[random];
    span.innerHTML = arrayColors[random];
}

function hexadecimalBackground() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += arrayHexCode[randomNumber(arrayHexCode.length)];
    }
    document.body.style.background = color;
    span.innerHTML = color;
}

function defaultColor() {
    document.body.style.background = 'transparent';
    span.innerHTML = 'Default';
}

function randomNumber(length) {
    return Math.floor(Math.random() * length);
}
