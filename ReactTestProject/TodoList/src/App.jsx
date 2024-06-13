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
    return todo.title.toLowerCase().includes(query.toLowerCase())
    })}, [query, todoList])

  function setVariable(func, var1, var2){
    func((arr) => {
        return arr.map((todo) => {
            if(todo.id === var1.id){
                return var2
            }
            return todo
        })
    })
  }

  return (
    <main>
      <h1 className="main-title">Todo List</h1>
      <h2 className="message">{todoList.length === 0 ? 'no tasks available' : ''}</h2>

      <AddTodoForm todoList={todoList} settodoList={settodoList} newTodo={newTodo} setNewTodo={setNewTodo} setVariable = {setVariable}/>

      <Filter filterTodos={filterTodos} query = {query} setQuery = {setQuery} setVariable ={setVariable}/>

      <TodoList todoList={todoList} settodoList={settodoList} filterTodos={filterTodos} setVariable ={setVariable}/>

      <TodoStatistics todoList={todoList}/>

    </main>
  );
}

export default App;
