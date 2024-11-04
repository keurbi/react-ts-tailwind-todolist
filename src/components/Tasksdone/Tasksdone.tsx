import { motion } from 'framer-motion';
import React, { FC, useState } from 'react';

interface TasksdoneProps {}

export interface TaskdoneInterface {
  title: string;
  index: number; // enregistre un timestamp
  difficulty: number;
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
    if (transmittedTask && transmittedTask.title.trim()) {
      setTaskdone(prevTasks => [...prevTasks, { 
        title: transmittedTask.title, 
        index: Date.now(),
        difficulty: transmittedTask.difficulty 
      }]);
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
      <div className='h-[85%] mt-4 bg-slate-100 rounded-lg p-2 overflow-auto'>
      {Taskdone.length > 0 && Taskdone.map((task, index) => (
          <motion.div 
            key={index}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            className='flex justify-between items-center bg-white my-2 p-2 rounded h-[30px] w-[100%]'>
            <span>{task.title}</span>
            <span>
              {task.difficulty === 1 && '🟢 Facile'}
              {task.difficulty === 2 && '🟠 Moyen'}
              {task.difficulty === 3 && '🔴 Difficile'}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Tasksdone;
