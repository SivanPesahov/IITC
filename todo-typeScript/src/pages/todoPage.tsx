import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Trash } from "lucide-react";

export interface Todo {
  id: string;
  title: string;
  isComplete: boolean;
}

export const apiURL = "http://localhost:8001/todos";

export const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const titleRef = useRef<HTMLInputElement>(null);
  const isCompleteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios.get(apiURL).then((res) => setTodos(res.data));
    setLoading(false);
  }, []);

  async function addTodo() {
    if (titleRef.current && isCompleteRef.current) {
      const vars = {
        title: titleRef.current.value,
        isComplete: isCompleteRef.current.checked,
      };
      axios.post(apiURL, vars).then((res) => setTodos(res.data));
    }
  }

  async function handleDelete(
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) {
    ev.stopPropagation();
    await axios.delete(apiURL + "/" + id);
    setTodos((prev) => prev.filter((post) => post.id !== id));
  }

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Add todo section</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="title..." ref={titleRef} />
            <div className="flex">
              <Checkbox className="mt-1" ref={isCompleteRef} />
              <p>Completed?</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={addTodo}>
              Add
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <Button
                  onClick={(ev) => handleDelete(ev, todo.id)}
                  variant="ghost"
                  size="sm"
                >
                  <Trash className="h-4 w-4 text-rose-500" />
                </Button>
                <Link to={`/${todo.id}`}>{todo.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
