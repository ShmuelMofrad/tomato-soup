/**
 * Author: Samuel K. Mofrad
 * Version: 0.0.1 - May 2022
 */

const say = document.getElementById('say');
const randomDisplay = document.getElementById('computer-said');

const quotes = [
'you are so clever!',
'you are the only person in the world I should like to know thoroughly.',
'you can resist anything except temptation.',
'you are only very, very curious.',
'People say nothing is impossible, but I do nothing every day.'];

say.addEventListener('click', (e) => {
    const randomNumber = Math.floor((Math.random() * quotes.length));
    // console.log(randomNumber);
    randomDisplay.innerHTML = quotes[randomNumber];
});