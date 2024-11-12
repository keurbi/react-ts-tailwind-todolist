import React, { FC } from "react";

interface DisplayTasksProps {
  tasks: {
    todo: { title: string; difficulty: number; status: string }[];
    pending: { title: string; difficulty: number; status: string }[];
    done: { title: string; difficulty: number; status: string }[];
  },
  switchTask : (direction : string, switchedTask : {status : string}) => void;
  // onTaskComplete: (value : number) => void;
}

const DisplayTasks: FC<DisplayTasksProps> = ({ tasks }, switchTask) => (
  <div className="flex gap-4 flex-1">
    {["todo", "pending", "done"].map((status) => (
      <div
        key={status}
        className="flex-1 flex flex-col bg-white rounded-lg shadow-md h-full"
      >
        <h3 className="font-bold text-lg p-2 capitalize text-center border-b sticky top-0 bg-white">
          {status}
        </h3>
        <div className="overflow-y-auto flex-1 p-2">
          {tasks[status as keyof typeof tasks].map((task, index) => (
            <div
              key={index}
              className="flex items-center p-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm mb-1 h-[30px]"
            >
              <span className="font-medium flex-1">{task.title}</span>
              <button
                onClick={() => switchTask("left", task)}
                className="hover:bg-gray-200 p-1 rounded-full"
              >
                ⬅️
              </button>
              <button
                onClick={() => switchTask("right", task)}
                className="hover:bg-gray-200 p-1 rounded-full mx-1"
              >
                ➡️
              </button>

              <span>
                {task.difficulty === 1
                  ? "🟢"
                  : task.difficulty === 2
                  ? "🟠"
                  : "🔴"}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default DisplayTasks;
