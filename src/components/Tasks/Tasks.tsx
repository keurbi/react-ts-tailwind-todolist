import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { MouseEventHandler, MouseEvent } from "react";
import DisplayTasks from "../DisplayTasks/DisplayTasks";
import AddHeader from "../AddHeader/AddHeader"
import indexOfFirstTask from '../Pagination/Pagination';

interface TasktodoInterface {
  title: string;
  index: number;
  difficulty: number;
  indexOfFirstTask : number;
  displayIndex : number;
}

export interface TasksProps {
  onTransmit: (task: { title: string; difficulty: number }) => void;
  Pagination: React.FC;
}

const Tasks: FC<TasksProps> = ({ onTransmit, Pagination }) => {

  const [Tasktodo, setTasktodo] = useState<TasktodoInterface[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDifficulty, setNewTaskDifficulty] = useState(1);

  const addTask = () => {
    if (newTaskTitle.trim()) {
      //trim pour enlever espaces autour et empêcher ajout vide
      const newTask: TasktodoInterface = {
        title: newTaskTitle,
        index: Tasktodo.length,
        difficulty: newTaskDifficulty,
      };

      setTasktodo([...Tasktodo, newTask]);

      setNewTaskTitle("");
      setNewTaskDifficulty(1);
    }
  }
  const handleTaskComplete = (taskId: number) => {
    const taskToComplete = Tasktodo.find(task => task.index === taskId);
    if (taskToComplete) {
      onTransmit({
        title: taskToComplete.title,
        difficulty: taskToComplete.difficulty
      });
      setTasktodo(Tasktodo.filter(task => task.index !== taskId));
    }
  }

  return (
    <div className="w-6/12 h-full flex-nowrap bg-white rounded-lg border-transparent p-4 flex flex-col">
      <AddHeader
        addTask={addTask}
        setNewTaskDifficulty={(value: number) => setNewTaskDifficulty(value)}
        setNewTaskTitle={(value: string) => setNewTaskTitle(value)}
        newTaskDifficulty={newTaskDifficulty}
        newTaskTitle={newTaskTitle}
      />
      <DisplayTasks Tasks={Tasktodo} onTaskComplete={handleTaskComplete}/>
      <Pagination />
    </div>
  );
}

export default Tasks;