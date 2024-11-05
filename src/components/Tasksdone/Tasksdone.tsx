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
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  // tâches à afficher
  const indexOfLastTask = currentPage * tasksPerPage;
  // Exemple: page2 * 5tâches = 10 

  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  // on commence à la 5ème tâche

  const currentTasks = Taskdone.slice(indexOfFirstTask, indexOfLastTask);
  // si Taskdone = [0,1,2,3,4,5,6,7,8,9] slice(5,10) donnera [5,6,7,8,9]  

  React.useEffect(() => {
    // vérif pour pas ajouter une tâche vide
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

      <div className='h-[85%] mt-4 flex flex-col'>
        <div className='h-[83%] bg-slate-100 rounded-lg p-2'>
          {currentTasks.map((task, index) => (
            <motion.div 
              key={index}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 0.3 }}
              className='flex justify-between items-center bg-white my-2 p-2 rounded h-[35px] w-[100%]'>
              <span>{task.title}</span>
              <span>
                {task.difficulty === 1 && '🟢 Facile'}
                {task.difficulty === 2 && '🟠 Moyen'}
                {task.difficulty === 3 && '🔴 Difficile'}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="h-[17%] flex justify-center items-center gap-6 pt-5">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-1.5 rounded-lg shadow-md transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Précédent
          </button>
          <span className="text-lg font-medium text-gray-700">
            Page {currentPage} sur {Math.ceil(Taskdone.length / tasksPerPage)}
          </span>
          <button 
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={indexOfLastTask >= Taskdone.length}
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-4 py-1.5 rounded-lg shadow-md transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};
export default Tasksdone;
