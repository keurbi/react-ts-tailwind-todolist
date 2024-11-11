import React, { FC, Fragment, useState } from "react";
import Pagination from "../Pagination/Pagination";
import DisplayTasks from "../DisplayTasks/DisplayTasks";

interface ListProps {}

const List: FC<ListProps> = () => {

  const [tasks, setTasks] = useState([[],[],[]])


  return (
    <div className="container flex flex-col h-2/4 bg-slate-300 rounded-lg border-2 border-transparent shadow-[0_35px_60px_-15px_rgba(2,2,0,0.3)] p-2">
      <h1 className="h-[10%] font-mono text-4xl text-center underline decoration-pink-500 tracking-widest animate-slidein">
        Make ur tasks:
        <span className="animate-pulse font-bold">NOW</span>
      </h1>
      <div className="h-[90%] flex flex-row justify-center gap-4 p-2">
       {/* <DisplayTasks/> */}
      </div>
    </div>
  );
};export default List;
