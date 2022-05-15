/**
 * Author: Samuel K. Mofrad
 * Version: 0.0.1 - May 2022
 */

const bgColorDisplay = document.getElementById('bg-color');
const rgbColorDisplay = document.getElementById('rgb-color');

const hexadecimalNumber = function (size) { 
    let hexArray = [];
    for (let index = 0; index < size; index++) {
        hexArray.push(getRandomHexNumber());
        console.log(hexArray.length);
    }
    let result = hexArray.join('');
    console.log('result: ' + result);
    return result;
}

function getRandomHexNumber() {
    let randomNumber = Math.floor(Math.random() * 16);
    let hexNumber = getHexNumber(randomNumber);
    console.log('Hex Number: ' + hexNumber);
    return hexNumber;
}

function getHexNumber(n) {
    return n.toString(16);
}

const bgColor = '#' + hexadecimalNumber(6);

console.log(bgColor);

bgColorDisplay.innerHTML = bgColor;

document.body.style.backgroundColor = bgColor;

rgbColorDisplay.innerHTML = document.body.style.backgroundColor;