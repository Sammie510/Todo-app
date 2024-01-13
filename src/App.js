import { useState } from 'react';
import './App.css';
import FormInput from './FormInput';
import Output from './Output';
import ListContextProvider from './context/ListContextProvider';

let tasks = [];


function App() {
  const [task, setTask] = useState(tasks);
  const addTaskHandler = (taskItems) => {
    console.log(taskItems);
    setTask(prevTasks => {
      return [taskItems, ...prevTasks]
    })
  };

  return (
    <ListContextProvider>
      <div className="app">
        <div className="app-body">
          <FormInput onAddTask={addTaskHandler} />
          <Output task={task} />
        </div>
      </div>
    </ListContextProvider>
  );
}

export default App;
