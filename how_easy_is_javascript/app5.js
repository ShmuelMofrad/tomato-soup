/**
 * Author: Samuel K. Mofrad
 * Version: 0.0.1 - May 2022
 */

const bgColorDisplay = document.getElementById('bg-color');
const rgbColorDisplay = document.getElementById('rgb-color');

const hexadecimalNumber = (size) => { 
    let hexArray = [];
    for (let index = 0; index < size; index++) {
        hexArray.push(Math.floor(Math.random() * 16).toString(16));
    }
    let result = hexArray.join('');
    console.log('result: ' + result);
    return result;
}

const bgColor = '#' + hexadecimalNumber(6);

bgColorDisplay.innerHTML = bgColor;

document.body.style.backgroundColor = bgColor;

rgbColorDisplay.innerHTML = document.body.style.backgroundColor;