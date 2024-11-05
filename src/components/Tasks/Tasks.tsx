import { motion } from 'framer-motion';
import React, { FC, useState } from 'react';
import { MouseEventHandler, MouseEvent } from 'react';

interface TasktodoInterface {
  title: string;
  index: number;
  difficulty: number;
}

export interface TasksProps {
  onTransmit: (task: { title: string, difficulty: number }) => void
}

const Tasks: FC<TasksProps> = (onTransmit) => {
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

const completeTask = (displayIndex: number) => {
    // calcule le vrai index
    const realIndex = indexOfFirstTask + displayIndex;
    const updatedTasks = [...Tasktodo];
    const taskToTransmit = Tasktodo[realIndex];

    // transmission de la tâche
    onTransmit.onTransmit(taskToTransmit);
    updatedTasks.splice(realIndex, 1);
    setTasktodo(updatedTasks);
}
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = Tasktodo.slice(indexOfFirstTask, indexOfLastTask);

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
      <div className='h-[85%] mt-4 flex flex-col'>
        <div className='h-[83%] bg-slate-100 rounded-lg p-2'>
          {currentTasks.map((task, index) => (
            <div 
              key={index} 
              className='flex justify-between items-center bg-white my-2 p-2 rounded h-[30px] w-[100%]'>
              <span>{task.title}</span>
              <span>
                {task.difficulty === 1 && '🟢 Facile'}
                {task.difficulty === 2 && '🟠 Moyen'}
                {task.difficulty === 3 && '🔴 Difficile'}
              </span>
              <span>
              <button onClick={() => completeTask(index)} type="button" className="bg-green-700 hover:bg-green-800 text-white text-sm py-1 px-2 rounded">
                 Done
               </button>
              </span>
            </div>
          ))}
        </div>
        <div className="h-[17%] flex justify-center items-center gap-6 pt-5">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  px-4 py-1.5 rounded-lg shadow-md transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Précédent
          </button>
          <span className="text-lg font-medium text-gray-700">
            Page {currentPage} sur {Math.ceil(Tasktodo.length / tasksPerPage)}
          </span>
          <button 
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={indexOfLastTask >= Tasktodo.length}
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold  px-4 py-1.5 rounded-lg shadow-md transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tasks;