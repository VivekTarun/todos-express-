const express = require('express');
const { todosController } = require('../../controllers/index')

const todosRouter = express.Router();

// If any request comes and route cont. with localhost/api/v1/ping, we map it to pingtodosController.
todosRouter.get('/ping', todosController.pingtodosController);

todosRouter.get('/:id', todosController.getTodos);

todosRouter.get('/', todosController.getAllTodos);

todosRouter.post('/', todosController.addTodos);

todosRouter.delete('/', todosController.deleteTodos);

todosRouter.delete('/:id', todosController.deleteByIdTodos);



module.exports = todosRouter;