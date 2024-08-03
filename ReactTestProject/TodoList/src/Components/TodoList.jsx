import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList(props){

    return (
      <>
      <ul className="todo-list">
          {props.filterTodos.length === 0 ? <p style={{textAlign: "center"}}>No tasks available</p> : null}
          {props.filterTodos.map((todoItem) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} settodoList={props.settodoList} todoList={props.todoList} isDetail={props.isDetail}/>
          ))}
        </ul>
      </>
    )
  }

  export default TodoList;