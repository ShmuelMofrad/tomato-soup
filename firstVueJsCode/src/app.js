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
        }
    }
}).mount('#app');