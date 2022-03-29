import './App.css';
import NewTask from './components/NewTask';
import React, { useState } from 'react';
import PendingTasks from './components/PendingTasks';
import DoneTasks from './components/DoneTasks';

function App() {
  const [todo, setTodo] = useState([
    { id: 1, name: 'Wake Up', status: 'Pending' },
    { id: 2, name: 'code', status: 'Pending' },
    { id: 3, name: 'eat', status: 'Pending' },
    { id: 4, name: 'drink', status: 'Pending' },
    { id: 5, name: 'Valorant', status: 'Pending' },
  ]);

  const [loading, setLoading] = useState(false);

  function addTask(NewTask) {
    let taskNew = { id: todo.length + 1, name: NewTask, status: 'Pending' };

    setTodo([...todo, taskNew]);
  }
  console.log(todo);

  function deleteTask(taskName) {
    let updatedToDolist = todo.filter((todo) => taskName !== todo.name);
    setTodo(updatedToDolist);
  }

  function taskDone(done) {
    todo.map((doneList) => {
      if (done === doneList.name) doneList.status = 'Done';
      console.log('done');
      return doneList;
    });
  }

  return (
    <div className="to-do-css">
      <h1>Todo App</h1>

      <NewTask todo={todo} additionalTask={addTask} />

      {/* {todo.filter((todo) => todo.status === 'Pending').length > 0 ? todo.map(todo => {
        return <PendingTasks /> 
      })} */}
      <h1>Pending Tasks</h1>

      {todo.filter((todo) => todo.status === 'Pending').length > 0 ? (
        todo.map((todoList) => {
          if (todoList.status === 'Pending')
            return (
              <PendingTasks
                todo={todoList}
                taskDone={taskDone}
                deleteTask={deleteTask}
              />
            );
        })
      ) : (
        <h3>No Pending Task</h3>
      )}
      <h3>Done</h3>

      {todo.filter((todo) => todo.status === 'Done').length > 0 ? (
        todo.map((todoList) => {
          if (todoList.status === 'Done') return <DoneTasks todo={todoList} />;
        })
      ) : (
        <h3>No Done Task</h3>
      )}
    </div>
  );
}

export default App;
