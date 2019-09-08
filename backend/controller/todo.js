const TodoModel = require("../model/todo");

//Post a todo.. POST=> http://localhost:8080/post
exports.postTodo = (req, res, next) => {
  const todo = req.body.todo;
  const extodo = req.body.extodo;
  TodoModel.create({ todo, extodo })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => console.log(err));
};

//get all todo.. GET=> http://localhost:8080/todo
exports.getAllTodo = (req, res, next) => {
  TodoModel.findAll()
    .then((todos) => {
      res.status(200).send(todos);
    })
    .catch((err) => {
      req.status(404).send("Not Working!");
    });
};

//get a todo  GET=> http://localhost:8080/todo/1
exports.getATodo = (req, res, next) => {
  const todoId = req.params.id;
  TodoModel.findOne({ where: { id: todoId } })
    .then((todo) => {
      if (!todo) {
        return res.status(404).send("Todo Not Found");
      }
      return res.status(200).send(todo);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

//Delete all todo.. DELETE=> http://localhost:8080/delete
exports.deleteAllTodo = (req, res, next) => {
  TodoModel.destroy({
    where: {},
    truncate: true
  }).then(() => {
    res.status(200).send("All Todo Deleted Successfully.");
  });
};

//Delete a todo.. DELETE=> http://localhost:8080/delete/1
exports.deleteATodo = (req, res, next) => {
  const todoId = req.params.id;

  TodoModel.findOne({ where: { id: todoId } })
    .then((todo) => {
      if (!todo) {
        return res.status(404).send("Todo Not Found");
      }
      return TodoModel.destroy({ where: { id: todo.id } })
        .then(() => {
          return res.status(200).send(todo);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

//Update a todo..  PUT=> http://localhost:8080/update/1
exports.updateATodo = (req, res, next) => {
  const todoId = req.params.id;
  const todo = req.body.todo;
  const extodo = req.body.extodo;

  TodoModel.findOne({ where: { id: todoId } })
    .then((todos) => {
      if (!todos) {
        return res.status(404).send("Todo Not Found");
      }
      return TodoModel.update({todo, extodo }, { where: { id: todos.id } })
        .then((data) => {
          console.log("data", data[0]);
          console.log('data',todo)
          return res.status(200).send({
            id:data[0],
            todo,
            extodo
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};
