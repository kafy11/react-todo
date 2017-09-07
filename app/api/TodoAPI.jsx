var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try { // try because if json is invalid
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    if ($.isArray(todos)) {
      return todos;
    } else {
      return [];
    }
  }
};
