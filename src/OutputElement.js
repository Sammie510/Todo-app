import React, { useContext, useState } from 'react';
import './OutputElement.css';
import ListContext from './context/list-context';

const OutputElement = (props) => {
  const { listItems } = useContext(ListContext)
  const { filterItems } = useContext(ListContext)

  const [initList, setList] = useState(listItems)

  const task = listItems.map((tasks, id) => {
    
  
    const handleDelete = () => {
      const updatedList = listItems.filter(item=>item.id!==tasks.id)

      console.log(updatedList)
      filterItems(updatedList)
      setList(updatedList)
      console.log(tasks)
    }
    return (
      <li key={id}>
        <div>{tasks.task}</div>
        <button
          className="edit"
          onClick={(e) => {
            e.target.previousElementSibling.classList.add('strike');
          }}
        >
          Complete
        </button>
        <button
          id={id}
          className="delete"
          onClick={handleDelete}
        >
          delete
        </button>
      </li>
    );
  });

  return task;
};

export default OutputElement;
