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
    let randomHexNumber = Math.floor(Math.random() * 16).toString(16);
    console.log('Hex Number: ' + randomHexNumber);
    return randomHexNumber;
}

const bgColor = '#' + hexadecimalNumber(6);

console.log(bgColor);

bgColorDisplay.innerHTML = bgColor;

document.body.style.backgroundColor = bgColor;

rgbColorDisplay.innerHTML = document.body.style.backgroundColor;