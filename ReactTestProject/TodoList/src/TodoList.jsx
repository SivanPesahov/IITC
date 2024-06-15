import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList(props){

    return (
      <>
      <ul className="todo-list">
          {props.filterTodos.map((todoItem) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} settodoList={props.settodoList} todoList={props.todoList} />
          ))}
        </ul>
      </>
    )
  }

  export default TodoList;