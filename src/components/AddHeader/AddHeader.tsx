import React, { FC } from 'react';


interface HeaderProps {
  addTask : () => void,
  setNewTaskDifficulty : (value : number) => void,
  setNewTaskTitle : (value : string) => void,
  newTaskDifficulty : number,
  newTaskTitle : string

}

const Header: FC<HeaderProps> = ({ addTask, newTaskDifficulty, newTaskTitle, setNewTaskDifficulty, setNewTaskTitle }) => (
  <div className='flex gap-4 items-center h-[15%]'>
    <h2 className='text-2xl underline w-4/12 text-center'>Tasks to do</h2>
    <input 
      value={newTaskTitle}
      onChange={(e) => setNewTaskTitle(e.target.value)}
      placeholder='Add a task' 
      className='w-8/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
      type="text" 
      name="task" 
      id="task"
    />
    <select 
      value={newTaskDifficulty}
      onChange={(e) => setNewTaskDifficulty(Number(e.target.value))}
      className='w-3/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    >
      <option value="1">Facile 🟢</option>
      <option value="2">Moyen 🟠</option>
      <option value="3">Difficile 🔴</option>
    </select>
    <button 
      onClick={() => addTask()}
      className='
        bg-blue-400 
        hover:bg-blue-500 
        text-white 
        font-bold 
        py-2 
        px-4 
        rounded 
        focus:outline-none 
        focus:shadow-outline
      '>OK
    </button>
  </div>
);

export default Header;
