import React from 'react';
import Todo from './Todo.js';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.todos.map(todo => (
            <Todo toggleItem={this.props.toggleItem} id={todo.id} name={todo.name} completed={todo.completed} />
          ))
        }

      </div>
    )
  }
}
