import React, { useContext, useState } from 'react';
import './FormInput.css';

import ListContext from './context/list-context';

const FormInput = (props) => {
  const [enteredTask, setEnteredTask] = useState('');

  const listCtx = useContext(ListContext)
  // console.log(listCtx)



  const taskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredTask === '') {
      alert('Enter a Task!');
    } else {
      // console.log(enteredTask);
      const addTask = {
        id: Math.random().toString(),
        task: enteredTask,
      };
      props.onAddTask(addTask);
      listCtx.addItems(addTask)
      setEnteredTask('');
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter task..."
        className="input"
        value={enteredTask}
        onChange={taskChangeHandler}
      />
      <input type="submit" value="Add" className="submit" />
    </form>
  );
};

export default FormInput;
