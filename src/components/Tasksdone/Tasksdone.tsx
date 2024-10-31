import React, { FC, useState } from 'react';


interface TasksdoneProps {}


export  interface TaskdoneInterface{
  title : string;
  index : number;
  difficulty : number;
}

const Tasksdone: FC<TasksdoneProps> = () => {

  const [Taskdone, setTaskdone] = useState([]);

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
        contenu tasks done
      </div>
    </div>
  );
};

export default Tasksdone;
