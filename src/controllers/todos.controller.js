const { TodosRepository } = require("../repositories");
const { TodosService } = require("../services");
const { StatusCodes } = require('http-status-codes');

const todosService = new TodosService(new TodosRepository());

async function pingtodosController(req, res) {
  return res.status(StatusCodes.OK).json({ message: "pong" });
}

async function getTodos(req, res) {
  const todo = await todosService.getTodos(req.params.id);
  return res.status(StatusCodes.OK).json(todo);
}

async function getAllTodos(req, res) {
  const allTodos = await todosService.getAllTodos();
  return res.status(StatusCodes.OK).json(allTodos);
}

async function addTodos(req, res) {
  const newTodo = await todosService.addTodos(req.body.text);
  return res.status(StatusCodes.CREATED).json(newTodo);
}

async function deleteTodos(req, res) {
  const remainingTodos = await todosService.deleteTodos();
  return res.status(StatusCodes.OK).json(remainingTodos);
}

async function deleteByIdTodos(req, res) {
  const deletedTodo = await todosService.deleteByIdTodos(req.params.id);
  return res.status(StatusCodes.OK).json(deletedTodo);
}

module.exports = {
  pingtodosController,
  getTodos,
  getAllTodos,
  addTodos,
  deleteTodos,
  deleteByIdTodos,
};
