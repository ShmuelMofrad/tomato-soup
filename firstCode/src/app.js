// Read html elemnts
const userInputElement = document.querySelector('input');
const todoListElement = document.querySelector('ul');
const addButtonElement = document.querySelector('button');

// Add event listener to button
addButtonElement.addEventListener('click', addNewTodo);