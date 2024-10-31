import React, { FC, useState } from 'react';

interface TasktodoInterface {
  title: string;
  index: number;
  difficulty: number;
}

export interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
  const [Tasktodo, setTasktodo] = useState<TasktodoInterface[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDifficulty, setNewTaskDifficulty] = useState(1);

  const addTask = () => {
    if (newTaskTitle.trim()) { //trim pour enlever espaces autour et empêcher ajout vide
      const newTask: TasktodoInterface = {
        title: newTaskTitle,
        index: Tasktodo.length,
        difficulty: newTaskDifficulty
      };

      setTasktodo([...Tasktodo, newTask]);
      
      setNewTaskTitle('');
      setNewTaskDifficulty(1);
    }
  };

  return (
    <div className='w-6/12 h-full flex-nowrap bg-white rounded-lg border-transparent p-4 flex flex-col'>
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
          onChange={(e) => setNewTaskDifficulty(Number(e.target.value))}// number() utilisé pour passer de str à nber
          className='w-3/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          <option value="1">Facile 🟢</option>
          <option value="2">Moyen 🟠</option>
          <option value="3">Difficile 🔴</option>
        </select>
        <button 
          onClick={addTask}
          className='
            bg-blue-500 
            hover:bg-blue-700 
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
      <div className='h-[85%] mt-4 bg-slate-100 rounded-lg p-2 overflow-auto'>
        {Tasktodo.map((task, index) => (
          <div 
            key={index} 
            className='flex justify-between items-center bg-white m-2 p-2 rounded h-[30px] w-[95%]'>
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

export default Tasks;