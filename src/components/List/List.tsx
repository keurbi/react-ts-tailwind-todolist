import React, { FC, Fragment, useCallback, useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import DisplayTasks from "../DisplayTasks/DisplayTasks";
import Header from "../Header/Header";
import { Task, TaskStatus, TaskStatusEnum } from "../../types/task.type";

interface ListProps {}

const initaliseMap = () => {
  const newMap = new Map<TaskStatus, Task[]>();
  (Object.keys(TaskStatusEnum) as TaskStatus[]).forEach(status => newMap.set(status, []));
  return newMap;
}

const List: FC<ListProps> = () => {
  const [tasks, setTasks] = useState<Map<TaskStatus, Task[]>>(initaliseMap());


  const addTask = useCallback((newTask: Task) => {
    setTasks(prevTasks => {
      prevTasks.get(newTask.status)?.push(newTask);
      return prevTasks;
    });
  }, []);

  // const switchTask = (direction: string, switchedTask: Task) => {
  //   const currentIndex = tasksStates.indexOf(switchedTask.status);
  //   const newIndex = direction === "droite" ? currentIndex + 1 : currentIndex - 1;

  //   if (newIndex < 0 || newIndex > 2) {
  //     return;
  //   }
  //   const currentStatus = tasksStates[currentIndex] as keyof TasksByStatus;
  //   const newStatus = tasksStates[newIndex] as keyof TasksByStatus;

  //   setTasks(prevTasks => ({
  //     ...prevTasks,
  //     [currentStatus]: prevTasks[currentStatus].filter(task => task !== switchedTask),
  //     [newStatus]: [...prevTasks[newStatus], { ...switchedTask, status: newStatus }]
  //   }));
  // }

  return (
    <div className="container flex flex-col h-3/4 bg-slate-300 rounded-lg border-2 border-transparent shadow-[0_35px_60px_-15px_rgba(2,2,0,0.3)] p-2">
      <h1 className="h-[10%] font-mono text-4xl text-center underline decoration-pink-500 tracking-widest animate-slidein">
        Make ur tasks:
        <span className="animate-pulse font-bold">NOW</span>
      </h1>
      <Header addTask={addTask}/>
      <DisplayTasks tasks={tasks} switchTask={switchTask}/>
    </div>
  );

};

export default List;