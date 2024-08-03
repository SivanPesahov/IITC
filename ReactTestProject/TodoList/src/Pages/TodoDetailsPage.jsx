
import { useOutletContext, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TodoList from "../Components/TodoList";
import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";



function TodoDetailsPage() {
  // const context = useOutletContext();
  const { todoID } = useParams();
  const [todoList, settodoList] = useState([]);
  const [query, setQuery] = useState("")
  const [toggle, setToggle] = useState('all')
  const TODOS_URL = 'http://localhost:8001/initialTodos/'
  const [isDetail, setIsDetail] = useState(true);
  

  useEffect(() => {async function getTodoList(){
    try{
      const { data } = await axios.get(TODOS_URL)
      settodoList(data)
    } catch (err){
      console.log('error');
    }
  }
  getTodoList()
  }, [])

  const filterTodos = useMemo(() => {return todoList.filter((todo) => {
    return todo.id === todoID;
  });
  }, [query, todoList, toggle]);

  return (
    <>    
      <Card sx ={{marginTop: '1rem'}}>
      <CardContent sx ={{width: '100%',display: "flex", justifyContent: 'space-between'}} >  
        <TodoList todoList={todoList} settodoList={settodoList} filterTodos={filterTodos} isDetail={isDetail}/>
      </CardContent>
    </Card>
      

    </>
  );
}

export default TodoDetailsPage;