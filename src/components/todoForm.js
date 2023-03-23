
import React, {useState,useEffect, useRef} from "react";
import '../App.css';
export default function Todoform(props){
  //used to get the input value from the user
  const [input, setInput] = useState(props.edit ? props.edit.value :'');
  //used to automatically focus on the input bar.
  const inputRef = useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  });
  //handles the changes in the input box and the setInputs takes the new value.
  const handleChange = e => {
    setInput(e.target.value);
  };
  //on sumit it creates a random id and the text value be the value from the input box and it sets the input box value to empty string
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

//the first input box is for the editing an existing value and the second one is for the normal input box
  return(
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="update your item"
            value={input}
            onChange = {handleChange}
            name='text'
            ref={inputRef}
            className='todo-input-e'
          />
          <button onClick={handleSubmit} className='updatebtn'>Update</button>
        </>
      ):(
        <>
          <input
            placeholder="Add a task!!!"
            value={input}
            onChange={handleChange}
            name='text'
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todobtn'>I got this!</button>
        </>
      )}
    </form>
  );
}