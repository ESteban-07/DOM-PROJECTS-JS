// Variables
const arrayColors = ['Red', 'Green', 'Rgba(133,122,200)', '#F15025'];
const colorCode = '0123456789ABCDEF';
const paragraph = document.getElementById('demo');
const btnRandom = document.getElementById('btn-1');
const btnHex = document.getElementById('btn-2');
const btnReset = document.getElementById('btn-3');

// Event Listeners
btnRandom.addEventListener("click", randomBackground);
btnHex.addEventListener("click", hexadecimalBackground);
btnReset.addEventListener("click", defaultColor);

// Functions
function randomBackground () {
    const random = Math.floor(Math.random() * arrayColors.length);
    document.body.style.background = arrayColors[random];
    paragraph.innerHTML = `Color: ${arrayColors[random]}`;
}

function hexadecimalBackground () {
    let color = '#';
    for (let i = 0; i < 6; i++)  {
        color += colorCode[Math.floor(Math.random() * colorCode.length)];
    }
    document.body.style.background = color;
    paragraph.innerHTML = `Color: ${color}`;
}

function defaultColor() {
    document.body.style.background = 'transparent';
    paragraph.innerHTML = 'Color: default';
}