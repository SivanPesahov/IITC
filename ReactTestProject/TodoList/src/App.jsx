import React, { useEffect, useState, useMemo } from "react";
import TodoList from "./TodoList";
import TodoStatistics from "./TodoStatistics";
import AddTodoForm from "./AddTodoForm";
import Filter from "./Filter";
import axios from "axios";

function App() {

  const URL = 'http://localhost:8001/initialTodos/'

  const [todoList, settodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [query, setQuery] = useState("")
  const [toggle, setToggle] = useState('all')
  
  
  useEffect(() => {async function getTodoList(){
    try{
      const { data } = await axios.get(URL)
      settodoList(data)
    } catch (err){
      console.log('error');
    }
  }
  getTodoList()
}, [])

  const filterTodos = useMemo(() => {return todoList.filter((todo) => {
      if (toggle === "true") {
        return !todo.isComplete && todo.title.toLowerCase().includes(query.toLowerCase());
      } else if (toggle === "false") {
        return todo.isComplete && todo.title.toLowerCase().includes(query.toLowerCase());
      } else if (toggle === "alphabetical") {getAlphabeticalTodos();
        return todo.title.toLowerCase().includes(query.toLowerCase());
      } else {
        return todo.title.toLowerCase().includes(query.toLowerCase());
      }
    });
  }, [query, todoList, toggle]);

  function getAlphabeticalTodos(){
    const AlphabeticalTodos = todoList.sort((a, b) => a.title.localeCompare(b.title)); 
    settodoList(AlphabeticalTodos)
  }
  
  const handleFilterChange = (event) => {
    setToggle(event.target.value);
  };
  
  return (
    <main>
      <h1 className="main-title">Todo List</h1>
      <h2 className="message">{todoList.length === 0 ? 'no tasks available' : ''}</h2>

      <AddTodoForm todoList={todoList} settodoList={settodoList} newTodo={newTodo} setNewTodo={setNewTodo} />

      <Filter filterTodos={filterTodos} query = {query} setQuery = {setQuery} handleFilterChange={handleFilterChange}/>

      <TodoList todoList={todoList} settodoList={settodoList} filterTodos={filterTodos} />

      <TodoStatistics todoList={todoList}/>

    </main>
  );
}

export default App;
