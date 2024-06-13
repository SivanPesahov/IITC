import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoStatistics from "./TodoStatistics";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
  { id: '1', title: 'Learn React', isComplete: false },
  { id: '2', title: 'Build a Todo App', isComplete: false },
  { id: '3', title: 'Read JavaScript Documentation', isComplete: true },
  { id: '4', title: 'Write Unit Tests', isComplete: false },
  { id: '5', title: 'Implement Context', isComplete: true },
  { id: '6', title: 'Create Portfolio Website', isComplete: false },
  { id: '7', title: 'Learn TypeScript', isComplete: false },
  { id: '8', title: 'Refactor Codebase', isComplete: true },
  { id: '9', title: 'Optimize Performance', isComplete: false },
  { id: '10', title: 'Deploy to Production', isComplete: true }

];


function App() {

  const [todoList, settodoList] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  

  function checkForAnyAvailableTodos(){
    if(todoList.length === 0){
      return "No todos available"
    }
  }

  useEffect(() => {console.log('hello')}, [])
  useEffect(() => {console.log(todoList)}, [todoList])

  return (
    <main>
      <h1 className="main-title">Todo List</h1>
      <h2 className="message">{checkForAnyAvailableTodos()}</h2>

      <AddTodoForm todoList={todoList} settodoList={settodoList} newTodo={newTodo} setNewTodo={setNewTodo} />

      <TodoList todoList={todoList} settodoList={settodoList} />

      <TodoStatistics todoList={todoList}/>

    </main>
  );
}

export default App;
