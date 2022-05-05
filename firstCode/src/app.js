// Read html elemnts
const userInputElement = document.querySelector('input');
const todoListElement = document.querySelector('ul');
const addButtonElement = document.querySelector('button');

// create add new todo function
function addNewTodo() {
    const enteredTodoValue = userInputElement.value;
    const listTodoItems = document.createElement('li');
    listTodoItems.textContent = enteredTodoValue;
    todoListElement.appendChild(listTodoItems);
    userInputElement.value = '';
}

// Add event listener to button
addButtonElement.addEventListener('click', addNewTodo);