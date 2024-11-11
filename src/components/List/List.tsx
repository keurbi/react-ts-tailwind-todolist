import React, { FC, Fragment, useCallback, useState } from "react";
import Pagination from "../Pagination/Pagination";
import DisplayTasks from "../DisplayTasks/DisplayTasks";
import Header from "../Header/Header";

interface ListProps {}

interface Task {
  title : string,
  difficulty : number,
  status : string
}

const List: FC<ListProps> = () => {

  const tasksStates = ["todo","pending","done"];
  const [tasks, setTasks] = useState<Task[][]>([[],[],[]]);

  const [title,setTitle] = useState("");
  const [difficulty, setDifficulty] = useState(0);
  const [status, setStatus] = useState();

  const addTask = useCallback((taskData : {title :string, difficulty : number, status : string})=>{
    const statusIndex = tasksStates.indexOf(taskData.status);
    setTasks(prevTasks => {
      const newTasks = [...prevTasks];
      newTasks[statusIndex] = [...newTasks[statusIndex], taskData];
      return newTasks
    })
  },[tasks]);


  return (
    <div className="container flex flex-col h-3/4 bg-slate-300 rounded-lg border-2 border-transparent shadow-[0_35px_60px_-15px_rgba(2,2,0,0.3)] p-2">
      <h1 className="h-[10%] font-mono text-4xl text-center underline decoration-pink-500 tracking-widest animate-slidein">
        Make ur tasks:
        <span className="animate-pulse font-bold">NOW</span>
      </h1>
      <Header addTask = {addTask}/>
       {/* <DisplayTasks/> */}
    </div>
  );
};export default List;
