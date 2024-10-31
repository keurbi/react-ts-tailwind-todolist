import React, { FC, useState } from 'react';

interface ListProps {}

const List: FC<ListProps> = () => {
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  return (
<div className="container flex flex-col h-2/4 bg-slate-300 rounded-lg border-2 border-transparent shadow-[0_35px_60px_-15px_rgba(2,2,0,0.3)] p-2">
    <h1 className='h-[10%] font-mono text-4xl text-center underline decoration-pink-500 tracking-widest animate-slidein'> Yeepee</h1>
    <div className='h-[90%] flex flex-row justify-center gap-4 p-2'>
      <div className='w-6/12 h-full flex-nowrap bg-white rounded-lg border-transparent p-4 flex flex-col'>
        <div className='flex gap-4 items-center h-[15%]'>
          <h2 className='text-center text-2xl underline w-4/12'>Tasks to do</h2>
          <input 
            placeholder='Add a task' 
            className='w-8/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
            type="text" 
            name="task" 
            id="task"
          />
        </div>
        <div className='h-[85%] mt-4 bg-slate-100 rounded-lg p-2'>Div des tasks à faire</div>
      </div>
      <div className='w-6/12 h-full flex-nowrap bg-white rounded-lg border-transparent p-4'>
      <div className='flex gap-4 items-center h-[15%]'>
          <h2 className='text-center text-2xl underline w-4/12'>Tasks done</h2>
          <input 
            placeholder='Look for a task done' 
            className='w-8/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
            type="text" 
            name="task" 
            id="task"
          />
        </div>
        <div className='h-[85%] mt-4 bg-slate-100 rounded-lg p-2'>Div des tasks faites</div>
      </div>
      </div>
    </div>
  );
};

export default List;
