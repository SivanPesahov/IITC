import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Todo } from "./todoPage";
import axios from "axios";
import { apiURL } from "./todoPage";

export const TodoDetails = () => {
  const { todoId } = useParams<{ id: string }>();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  console.log(todoId);

  const selectedTodo = todos.find((todo) => todo.id === todoId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!selectedTodo) return <p>Todo not found</p>;

  return (
    <>
      <h1>{selectedTodo.title}</h1>
      <p>Completed: {selectedTodo.isComplete ? "Yes" : "No"}</p>
    </>
  );
};
