import React, { useState } from 'react';

function NewTask(props) {
  const [inputask, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.additionalTask(inputask);

    setInput('');
  };

  return (
    <div>
      <header>New Task</header>
      <h1>Task Name</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input Task"
          value={inputask}
          name="text"
          className="todo-input"
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button className="todo-button">+Add Task</button>
      </form>
    </div>
  );
}

export default NewTask;
