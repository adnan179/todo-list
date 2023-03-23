import React from "react";
import TodoList from '../src/components/toDoList';
import Head from "./components/header";
import { useState } from "react";
function App(){
  const [displaystyle, setDisplaystyle] = useState(true);

  const handleStyle = (displaystyle) =>{
    setDisplaystyle(displaystyle);
  }
  return(
    <div className={displaystyle? 'theme1':'theme2'}>
      <Head handleStyle={handleStyle}/>
      <TodoList displaystyle/>
        <div className='theme-div'></div>
    </div>
  )
}
export default App;
