// src/repositories/todos.repository.js

const { todos } = require('../config/db.config');

class TodosRepository {
  async getTodos(id) {
    return todos.find(todo => todo.id === id);
  }

  async getAllTodos() {
    return todos;
  }

  async addTodos(todoText) {
    const newTodo = { id: Date.now().toString(), text: todoText };
    todos.push(newTodo);
    return newTodo;
  }

  async deleteTodos() {
    todos.length = 0;
    return todos;
  }

  async deleteByIdTodos(id) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      return todos.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = TodosRepository;
