Vue.createApp({
    data() {
        return {
            todos: [],
            enteredTodoValue: ''
        };
    },
    methods: {
        addNewTodo() {
            this.todos.push(this.enteredTodoValue);
            this.enteredTodoValue = '';
        }
    }
}).mount('#app');