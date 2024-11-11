import React, { FC } from 'react';

interface DisplayTasksProps {
  Tasks: {
    title: string
    index: number
    difficulty: number
  }[]
}

const DisplayTasks: FC<DisplayTasksProps> = ({ Tasks }) => (
  <div>
    {Tasks.map((task, index) => (
      <div key={index}>
        {task.title}
        {task.difficulty}
        {task.index}
      </div>
    ))}
  </div>
);

export default DisplayTasks;
