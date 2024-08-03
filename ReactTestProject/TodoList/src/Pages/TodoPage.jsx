import { Link, Outlet, useLocation, useOutletContext, useSearchParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TodoList from "../Components/TodoList";
import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import Typography from '@mui/material/Typography';
import TodoStatistics from "../Components/TodoStatistics";
import Filter from "../Components/Filter";


function TodoPage() {
  
  const URL = 'http://localhost:8001/initialTodos/'
  const [todoList, settodoList] = useState([]);
  const [toggle, setToggle] = useState('all')
  const location = useLocation()

  const [searchParams, setSearchParams] = useSearchParams({query : ''})
  const query = searchParams.get('query')

  useEffect(() => {async function getTodoList(){
    try{
      const { data } = await axios.get(URL)
      settodoList(data)
    } catch (err){
      console.log('error');
    }
  }
  getTodoList()
  }, [location.pathname])
  
  const filterTodos = useMemo(() => {return todoList.filter((todo) => {
    if (toggle === "true") {
      return !todo.isComplete && todo.title.toLowerCase().includes(query.toLowerCase());
    } else if (toggle === "false") {
      return todo.isComplete && todo.title.toLowerCase().includes(query.toLowerCase());
    } else {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    }
  });
  }, [query, todoList, toggle]);

  const handleFilterChange = (event) => {
    setToggle(event.target.value);
  };
  
  return(

    <>
      <Card sx ={{marginTop: '6rem'}}>
          <CardContent sx ={{width: '100%',display: "flex", justifyContent: 'space-between'}} >
            <Typography variant="h4" gutterBottom>
              Todo List
            </Typography>
            <Filter filterTodos={filterTodos} query = {query} handleFilterChange={handleFilterChange}/>
          </CardContent>
        </Card>

      <Card sx ={{marginTop: '1rem'}}>
        <CardContent sx ={{width: '100%',display: "flex", justifyContent: 'space-between'}} >  
          <TodoList todoList={todoList} settodoList={settodoList} filterTodos={filterTodos} />
        </CardContent>
      </Card>

      <Card sx ={{marginTop: '1rem', marginBottom: '1rem', height: '6rem'}}>
          <TodoStatistics todoList={todoList}/> 
        </Card>

        <Outlet context={[{ open : true }]} />
        
    </>

  );
}

export default TodoPage;