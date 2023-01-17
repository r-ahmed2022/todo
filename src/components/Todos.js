/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Todos({ todos, deleteTodo }) {
  const todoList = todos.length ? (
    (todos.map((item) => (
      <div className="collection-item todo-div" key={item.id}>
        <span>{item.content}</span>
        <button className="deletebtn" onClick={() => { deleteTodo(item.id); }}>
          {' '}
          <i className="material-icons">small delete</i>
        </button>
      </div>
    )))) : (<p className="center">No todos...Hurray!</p>);

  return (
    <div className="collection">
      {todoList}
    </div>
  );
}
