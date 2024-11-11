import React, { FC, useState } from "react";
import Tasks from "../Tasks/Tasks";
import Tasksdone from "../Tasksdone/Tasksdone";
import TasktodoInterface from "../Tasks/Tasks";
import TaskdoneInterface from "../Tasksdone/Tasksdone";
import Pagination from "../Pagination/Pagination";

interface ListProps {}

const List: FC<ListProps> = () => {
  const [dataTransmitting, setdataTransmitting] = useState<{
    title: string;
    difficulty: number;
  }>({ title: "", difficulty: 0 });

  const transmittingTasks = (task: { title: string; difficulty: number }) => {
    setdataTransmitting(task);
  };

  return (
    <div className="container flex flex-col h-2/4 bg-slate-300 rounded-lg border-2 border-transparent shadow-[0_35px_60px_-15px_rgba(2,2,0,0.3)] p-2">
      <h1 className="h-[10%] font-mono text-4xl text-center underline decoration-pink-500 tracking-widest animate-slidein">
        Make ur tasks:
        <span className="animate-pulse font-bold">NOW</span>
      </h1>
      <div className="h-[90%] flex flex-row justify-center gap-4 p-2">
        <Tasks onTransmit={transmittingTasks} pagination={Pagination} />
        <Tasksdone transmittedTask={dataTransmitting} />
      </div>
    </div>
  );
};
export default List;
