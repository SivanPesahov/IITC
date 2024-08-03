import React, { useEffect, useState, useMemo } from "react";
import TodoList from "./Components/TodoList";
import TodoStatistics from "./Components/TodoStatistics";
import AddTodoForm from "./Components/AddTodoForm";
import Filter from "./Components/Filter";
import NavBar from "./Components/NavBar";
import axios from "axios";
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Link, NavLink, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import TodoPage from "./Pages/TodoPage";
import TodoDetailsPage from "./Pages/TodoDetailsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import CreateTodoPage from "./Pages/CreateTodoPage";
import TodosLayout from "./Pages/TodosLayout";

function App() {

//   const TODOS_URL = 'http://localhost:8001/initialTodos/'

//   const [todoList, settodoList] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [query, setQuery] = useState("")
//   const [toggle, setToggle] = useState('all')
//   const [isLoading, setIsLoading] = useState(true)
  
//   useEffect(() => {
//     async function getTodoList(){
//       try{
//         const { data } = await axios.get(TODOS_URL)
//         settodoList(data)
//       } catch (err){
//         console.log('error');
//       }
//     }
//     getTodoList()
//   }, [])

//   const filterTodos = useMemo(() => {return todoList.filter((todo) => {
//     if (toggle === "true") {
//       return !todo.isComplete && todo.title.toLowerCase().includes(query.toLowerCase());
//     } else if (toggle === "false") {
//       return todo.isComplete && todo.title.toLowerCase().includes(query.toLowerCase());
//     } else {
//       return todo.title.toLowerCase().includes(query.toLowerCase());
//     }
//   });
// }, [query, todoList, toggle]);
  
//   const handleFilterChange = (event) => {
//     setToggle(event.target.value);
//   };

//   const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );
  
  return (
    <>
    <NavBar></NavBar>
    
    <main>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/todos" element = {<TodosLayout />} >
          <Route path="list" element={<TodoPage />} >
            <Route path="create" element={<CreateTodoPage />} />
          </Route>
          <Route path=":todoID" element={<TodoDetailsPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </main>

      {/* <Card sx ={{marginTop: '6rem'}}>
        <CardContent sx ={{width: '100%',display: "flex", justifyContent: 'space-between'}} >
        <Typography variant="h4" gutterBottom>
        Todo List
        </Typography>
        <AddTodoForm todoList={todoList} settodoList={settodoList} newTodo={newTodo} setNewTodo={setNewTodo} />
        <Filter filterTodos={filterTodos} query = {query} setQuery = {setQuery} handleFilterChange={handleFilterChange}/>
        </CardContent>
        </Card>
        
        <h2 className="message">{todoList.length === 0 ? 'no tasks available' : ''}</h2>
        
        <Card sx ={{marginTop: '1rem'}}>
        <CardContent sx ={{width: '100%',display: "flex", justifyContent: 'space-between'}} >
        {
          isLoading ? 
          <div className="skeleton">
          <Skeleton sx={{ height: '9rem' }}/>
          <Skeleton animation="wave" sx={{ height: '9rem' }}/>
          <Skeleton animation={false} sx={{ height: '9rem' }}/>
          </div> 
          : 
          <TodoList todoList={todoList} settodoList={settodoList} filterTodos={filterTodos} />
          }
          </CardContent>
          </Card>
          
          <Card sx ={{marginTop: '1rem', marginBottom: '1rem', height: '6rem'}}>
          <TodoStatistics todoList={todoList}/> 
          </Card>  

     <Route path="/about" element={<AboutPage />} /> 

    <Route path="/product" element={<ProductLayout />}>
      <Route index element={<ProductPage />} />
      <Route path=":productId" element={<ProductDetailsPage />} />
      <Route path="new" element={<div>New</div>} /> 
  </Route> 

    <Route path="/*" element={<NotFoundPage />} /> */}
    </>
  );
}

export default App;


