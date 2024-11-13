import React, { FC, Fragment, useCallback, useEffect, useState } from "react";
import DisplayTasks from "../DisplayTasks/DisplayTasks";
import Header from "../Header/Header";
import { Task, TaskStatus, TaskStatusEnum } from "../../types/task.type";

interface ListProps {}

const initaliseMap = () => {
  const newMap = new Map<TaskStatus, Task[]>();
  (Object.keys(TaskStatusEnum) as TaskStatus[]).forEach((status) =>
    newMap.set(status, [])
  );
  return newMap;
};

const List: FC<ListProps> = () => {
  const [tasks, setTasks] = useState<Map<TaskStatus, Task[]>>(initaliseMap());

  const addTask = useCallback((newTask: Task) => {
    setTasks((prevTasks) => {
      const newMap = new Map(prevTasks);
      const currentTasks = [...(newMap.get(newTask.status) || []), newTask];
      newMap.set(newTask.status, currentTasks);
      return newMap;
    });
  }, []);

  const switchTask = (direction: string, switchedTask: Task) => {
    const currentIndex = Object.keys(TaskStatusEnum).indexOf(
      switchedTask.status
    );

    const newIndex = direction === "right" ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0 || newIndex > 2) {
      return;
    }
    const currentStatus = Object.keys(TaskStatusEnum)[currentIndex] as keyof TaskStatus;
    const newStatus = Object.keys(TaskStatusEnum)[newIndex] as keyof TaskStatus;

    setTasks((prevTasks) => {
      const newMap = new Map(prevTasks);
      // récup + filtre le tableau source pour enlever la tâche
      const currentTasks = newMap.get(currentStatus as TaskStatus)?.filter((task) => task !== switchedTask) || [];
        // récup tableau final et ajouté tache
      const targetTasks = [...(newMap.get(newStatus as TaskStatus) || []), 
      { ...switchedTask, status: newStatus as TaskStatus }
      ];
      // maj des deux tabs des statuts
      newMap.set(currentStatus as TaskStatus, currentTasks);
      newMap.set(newStatus as TaskStatus, targetTasks);

      return newMap;
    });
  };

  return (
    <div className="container flex flex-col h-3/4 bg-slate-300 rounded-lg border-2 border-transparent shadow-[0_35px_60px_-15px_rgba(2,2,0,0.3)] p-2">
      <h1 className="h-[10%] font-mono text-4xl text-center underline decoration-pink-500 tracking-widest animate-slidein">
        Make ur tasks:
        <span className="animate-pulse font-bold">NOW</span>
      </h1>
      <Header addTask={addTask} />
      <DisplayTasks tasks={tasks} switchTask={switchTask} />
    </div>
  );
};

export default List;
