var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    // when creating multiple components,
    // each component needs to have a unique key
    // ... for passing every attribute of todo as separate props
    var renderTodos = () => todos.map(
      (todo) => <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
    );

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
