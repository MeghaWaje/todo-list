import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default function TodoList() {
  const [todos, setTodos]= useState([]);
  

  const addTask = task =>{
    if(!task.text){
      return
    }
    const newTodos = [task, ...todos];
    console.log(newTodos, task, todos)
    setTodos(newTodos);
  }

  //remove todo
  const removeTask = id =>{
    let updatedTasks =[...todos].filter(task => task.id !== id)
    setTodos(updatedTasks)
  }

 //task completed
  const completeTask= id =>{
    let updatedTasks = todos.map(todo =>{
      if (todo.id == id){
        todo.isComplete = true;
      }
      return todo;
    })
   
    setTodos(updatedTasks)
  }
  return <div>
   <TodoForm addTask = {addTask}></TodoForm>
   <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
  </div>
  
}