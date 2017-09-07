var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    // when creating multiple components,
    // each component needs to have a unique key
    // ... for passing every attribute of todo as separate props
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

      return todos.map(
        (todo) => <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
      );
  };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
