const express = require('express');
const todosRouter = require('./todos.routes');

const v1Router = express.Router();

// If any request comes and route cont. with /problems, we map it to problemRouter.
v1Router.use('/todos', todosRouter);

module.exports = v1Router;