/**
 * Author: Samuel K. Mofrad
 * Version: 0.0.1 - May 2022
 */

// 1. pickup choices
const yourChoices = document.querySelectorAll('button');
// 2. pickup display
const displayYourChoice = document.getElementById('your-choice');
// 3. get user choice
let userChoice;
/* 4. get user choice and show 
   4.1. add eventListener click to button
   4.2. get user choice and save it.
   4.3. show user choice and add to display
*/
yourChoices.forEach(yourChoice => yourChoice.addEventListener('click', (e) => {
    // get button id
    userChoice = e.target.id;
    // a1. console.log(document.getElementById(userChoice).innerText);
    // a2. let userChoiceElement = document.getElementById(userChoice);
    // a3. let userChoiceElementInnerText = userChoiceElement.innerText;
    // a4. displayYourChoice.innerHTML = userChoiceElementInnerText;
    // add to innerHTML
    displayYourChoice.innerHTML = userChoice;
}));
