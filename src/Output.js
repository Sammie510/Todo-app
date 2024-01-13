import React , {useContext} from 'react';
import './Output.css';
import OutputElement from './OutputElement';
import ListContext from './context/list-context';

const Output = (props) => {
  const { clearAllItems } = useContext(ListContext)

  return (
    <div className="output">
      <ul>
        <OutputElement item={props.task}  />
      </ul>
      <button
        className="clear"
        onClick={clearAllItems}
      >
        Clear All
      </button>
    </div>
  );
};

export default Output;
