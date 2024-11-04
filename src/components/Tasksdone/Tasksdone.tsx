import React, { FC, useState } from 'react';


interface TasksdoneProps {}


export  interface TaskdoneInterface{
  title : string;
  index : number;
  difficulty : number;
}

export interface TasksProps {
  transmittedTask: 
  {title : string,
  difficulty : number
  };
}

const Tasksdone: FC<TasksProps> = ({transmittedTask}) => {
  const [Taskdone, setTaskdone] = useState<TaskdoneInterface[]>([]);

  React.useEffect(() => {
    if (transmittedTask) {
      setTaskdone(prevTasks => [...prevTasks, { title: transmittedTask.title, index: prevTasks.length, difficulty: transmittedTask.difficulty }] as TaskdoneInterface[]);
    }
  }, [transmittedTask]);

  return (
    <div className='w-6/12 h-full flex-nowrap bg-white rounded-lg border-transparent p-4 flex flex-col'>
      <div className='flex gap-4 items-center h-[15%]'>
        <h2 className='text-2xl underline w-4/12 text-center'>Tasks done</h2>
        <input 
          placeholder='Look for a previous task' 
          className='w-8/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
          type="text" 
          name="task" 
          id="task"
        />
      </div>
      <div className='h-[85%] mt-4 bg-slate-100 rounded-lg p-2'>
      {Taskdone.length > 0 && Taskdone.map((task, index) => (
          <div 
            key={index} 
            className='flex justify-between items-center bg-white my-2 p-2 rounded h-[30px] w-[100%]'>
            <span>{task.title}</span>
            <span>
              {task.difficulty === 1 && '🟢 Facile'}
              {task.difficulty === 2 && '🟠 Moyen'}
              {task.difficulty === 3 && '🔴 Difficile'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tasksdone;
