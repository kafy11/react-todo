var React = require('react');
var {connect} = require('react-redux');

import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function() {
    var {todos, showCompleted, searchText} = this.props;

    // when creating multiple components,
    // each component needs to have a unique key
    // ... for passing every attribute of todo as separate props
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText.toLowerCase());
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

      return filteredTodos.map(
        (todo) => <Todo key={todo.id} {...todo}/>
      );
  };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
