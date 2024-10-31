import React, { FC } from 'react';

interface TasktodoInterface {
  title : string;
  index : number ;
  difficulty : number;
}

export interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
  return (
    <div className='w-6/12 h-full flex-nowrap bg-white rounded-lg border-transparent p-4 flex flex-col'>
      <div className='flex gap-4 items-center h-[15%]'>
        <h2 className='text-2xl underline w-4/12 text-center'>Tasks to do</h2>
        <input 
          placeholder='Add a task' 
          className='w-8/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
          type="text" 
          name="task" 
          id="task"
        />
        <select 
          className='
            w-3/12 
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            p-2.5 
            dark:bg-gray-700 
            dark:border-gray-600 
            dark:text-white 
            dark:focus:ring-blue-500 
            dark:focus:border-blue-500'>
          <option value="1">Facile</option>
          <option value="2">Moyen</option>
          <option value="3">Difficile</option>
        </select>
      </div>
      <div className='h-[85%] mt-4 bg-slate-100 rounded-lg p-2'>
        contenu tasks
      </div>
    </div>
  );
};

export default Tasks;