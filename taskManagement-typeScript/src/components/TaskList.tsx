import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Pin } from "lucide-react";
import { Label } from "./ui/label";

import { ITask } from "@/pages/EditTaskPage";

interface TaskListProps {
  tasks: ITask[];
  isPinned: boolean;
}

const TaskList = ({ tasks, isPinned }: TaskListProps) => {
  const getBackgroundColorClass = (todoList: ITask["todoList"]) => {
    if (!todoList || todoList.length === 0) return "bg-gray-200";

    const completedTodos = todoList.filter((todo) => todo.isComplete).length;
    const totalTodos = todoList.length;
    const completionRate = completedTodos / totalTodos;

    if (completionRate === 1) {
      return "bg-green-200";
    } else if (completionRate > 0) {
      return "bg-yellow-200";
    } else {
      return "bg-red-200";
    }
  };

  return (
    <ul className="grid sm:grid-cols-3">
      {tasks.map((task: ITask) => {
        if (task.isPinned === isPinned) {
          const bgColorClass = getBackgroundColorClass(task.todoList);
          return (
            <li key={task._id} className="mx-2 ">
              <Link to={"/Tasks/List/" + task._id}>
                <Card className={`shadow-2xl my-4 ${bgColorClass}`}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{task.title}</span>
                      {isPinned && <Pin />}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Label>{task.description}</Label>
                      </div>
                      <div>
                        <Label>{task.body}</Label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default TaskList;
