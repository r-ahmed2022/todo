/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Todocontainer from './components/Todocontainer';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'complete react version of todoapp' },
      { id: 2, content: 'complete math magician site' },
      { id: 3, content: 'complete algo-DS challenge' },

    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((item) => item.id !== id);
    this.setState({
      todos,
    });
  };

  addToDo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState(
      {
        todos,
      },
    );
  };

  render() {
    return (
      <div className="container">
        <header className="header-section">
          <Navbar />
        </header>
        <Todocontainer addToDo={this.addToDo} />
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
