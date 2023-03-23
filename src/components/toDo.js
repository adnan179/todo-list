import React,{useState} from "react";
import '../App.css';
import Todoform from "./todoForm";


const Todo= ({todos, completeTodo, removeTodo,updateTodo,priorTodo,displaystyle}) => {
    //edit and setedit are used to update the already generated todos from the webpage and updates them to the new given value from the user.
    const[edit, setEdit] = useState({
      id:null,
      value:''
    });
    // it updates the todos when there are edited.
    const submitUpdate = value =>{
      updateTodo(edit.id, value);
      setEdit({
        id:null,
        value:''
      });
    };
    if(edit.id){
      return<Todoform edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo, index)=>(
      //Maps new todos to the webpage with the necessary buttons and functions of them.
      <div className={todo.isComplete ? 'todo-row complete':'todo-row'} key={index} draggable>
        <div className="todotxt" onClick={()=> completeTodo(todo.id)} >
          {/* on clicking the todo, it changes it's style and the text will be crossed,it is used when you want to cross the todos when it is completed */}
          {todo.text}
        </div>
        <div className="btnrow">
          {/*on clicking it removes the todo from the webpage  */}
          <div className="del"  onClick={()=> removeTodo(todo.id)}>
            X
          </div>
          {/* on clicking it allows you to edit and update the todo. */}
          <div className="tick" onClick={()=>setEdit({id: todo.id, value: todo.text})}>
            E
          </div>
        </div>
      </div>
    ))
}
export default Todo;