class TodosService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }

    async getTodos(id) {
        return this.todoRepository.getTodos(id);
    }

    async getAllTodos() {
        return this.todoRepository.getAllTodos();
    }

    async addTodos(todotext) {
        return this.todoRepository.addTodos(todotext);
    }

    async deleteTodos() {
        return this.todoRepository.deleteTodos();
    }

    async deleteByIdTodos(id) {
        return this.todoRepository.deleteByIdTodos(id);
    }
}

module.exports = TodosService;