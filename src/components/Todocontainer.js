import React from 'react';

export default function Todocontainer(props) {
  const [initialstate, setInitialState] = React.useState({
    content: '',
  });
  const handleChange = (event) => {
    setInitialState((prev) => ({ ...prev, content: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      id: Math.random(),
      content: initialstate.content,
    };

    // eslint-disable-next-line react/prop-types, react/destructuring-assignment
    props.addToDo(todo);
    setInitialState({ content: '' });
  };

  return (
    <main className="todo-main">
      <h1 className="title-header grey-text lighten-2">todos</h1>
      <form className="todoform" onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            type="text"
            className="todo-input"
            placeholder="todo"
            value={initialstate.content}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn"><i className="material-icons"><i className="material-icons">add_circle</i></i></button>
        </div>
      </form>
    </main>
  );
}
