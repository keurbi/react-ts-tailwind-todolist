import React, { FC, Fragment, useCallback, useState } from "react";
import Pagination from "../Pagination/Pagination";
import DisplayTasks from "../DisplayTasks/DisplayTasks";
import Header from "../Header/Header";

interface ListProps {}

type TaskStatus = "todo" | "pending" | "done";

interface Task {
  title: string;
  difficulty: number;
  status: TaskStatus;
}

interface TasksByStatus {
  todo: Task[];
  pending: Task[];
  done: Task[];
}

const List: FC<ListProps> = () => {
  const tasksStates = ["todo","pending","done"];
  const [tasks, setTasks] = useState<TasksByStatus>({ todo: [], pending: [], done: [] });

  const addTask = useCallback((taskData: { title: string; difficulty: number; status: string }) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [taskData.status]: [...prevTasks[taskData.status as TaskStatus], taskData as Task]
    }));
  }, []);

  return (
    <div className="container flex flex-col h-3/4 bg-slate-300 rounded-lg border-2 border-transparent shadow-[0_35px_60px_-15px_rgba(2,2,0,0.3)] p-2">
      <h1 className="h-[10%] font-mono text-4xl text-center underline decoration-pink-500 tracking-widest animate-slidein">
        Make ur tasks:
        <span className="animate-pulse font-bold">NOW</span>
      </h1>
      <Header addTask={addTask}/>
       {/* <DisplayTasks/> */}
    </div>
  );
};
export default List;