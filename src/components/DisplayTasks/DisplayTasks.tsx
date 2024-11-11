import React, { FC } from "react";

interface DisplayTasksProps {
  Tasks: {
    title: string;
    index: number;
    difficulty: number;
  }[];
  onTaskComplete: (value : number) => void;
}

const DisplayTasks: FC<DisplayTasksProps> = ({ Tasks, onTaskComplete }) => (
  <div className="flex-1 overflow-auto">
    {Tasks.map((task) => (
      <div 
        key={task.index}
        className="flex justify-between items-center p-2 hover:bg-gray-100 rounded"
        onClick={() => onTaskComplete(task.index)}
      >
        <span>{task.title}</span>
        <span>{task.difficulty === 1 ? "🟢" : task.difficulty === 2 ? "🟠" : "🔴"}</span>
      </div>
    ))}
  </div>
);

export default DisplayTasks;
