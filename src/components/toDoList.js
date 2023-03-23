import React, {useState} from 'react';
import Todoform from './todoForm';
import Todo from './toDo';
import '../App.css';
function TodoList(props) {
  //it creates an empty array to store the todo values in them.setTodos is used to keep updating the old todo list 
  //with new values when there are being added or updated.
  const[todos, setTodos] = useState([]);
  //it is used to add new todos to the array and update it.
  const addTodo = todo =>{
    //used to check if the given value by the user is valid or not.
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }
    //updates the previous array with new values.
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  //it is used to update the existing todo in the list.
  const updateTodo = (todoId, newValue)=>{
    //checking if the new value is valid or not
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return;
    }
    //sets the old value of the todo to the new value checking if both have the same id
    setTodos(prev => prev.map(item=>(item.id=== todoId ? newValue : item)));
  };
  //removes the existing todo from the list using filter function and updates the todos list
  const removeTodo=id=>{
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  //used to check if the todo is completed or not
  const completeTodo = id =>{
    //maps through the array and checks if the id is matching or not.
    let updatedTodos = todos.map(todo=> {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className={props.displaystyle?'theme1-todolist':'theme2-todolist'}>
      <h1>Just do it!</h1>
      <Todoform onSubmit={addTodo}/>
      <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList;
