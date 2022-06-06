import React from 'react';

import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  addTodo = (todo) => {
    let newToDo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newToDo]
    })
  }

  toggleItem = (itemId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: [...this.state.todos.filter(x =>!x.completed)]
    })
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />
        <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    )
  }
}
