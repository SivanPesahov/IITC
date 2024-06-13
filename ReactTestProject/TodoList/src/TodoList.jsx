import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoList, settodoList }){
    return (
      <>
      <ul className="todo-list">
          {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} settodoList={settodoList} todoList={todoList} />
          ))}
        </ul>
      </>
    )
  }

  export default TodoList;