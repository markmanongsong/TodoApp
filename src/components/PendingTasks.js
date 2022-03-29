import React from 'react';

function PendingTasks(props) {
  function triggerTaskDone(e) {
    alert(`You have marked as done ${props.todo.name}`);
    props.taskDone(props.todo.name);
    console.log(props.todo);
  }

  function triggerDeleteTask() {
    alert(`You have deleted ${props.todo.name}`);
    props.deleteTask(props.todo.name);
  }
  return (
    <div>
      {props.todo.name}

      <button onClick={triggerTaskDone}>&#10003;</button>

      <button onClick={triggerDeleteTask}>&#10005;</button>
    </div>
  );
}

export default PendingTasks;
