import React, { FC, useState } from 'react';


interface PaginationProps {
  Tasktodo : [],
  Taskdone: [],
}

const Pagination: FC<PaginationProps> = (Taskdone, Tasktodo) => {

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const task = Taskdone | Tasktodo
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = Tasktodo.slice(indexOfFirstTask, indexOfLastTask);

  return (
  <div className="h-[17%] flex justify-center items-center gap-6 pt-5">
  <button 
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  px-4 py-1.5 rounded-lg shadow-md transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
  >
    Précédent
  </button>
  <span className="text-lg font-medium text-gray-700">
    Page {currentPage} sur {Math.ceil(task.length / tasksPerPage)}
  </span>
  <button 
    onClick={() => setCurrentPage(prev => prev + 1)}
    disabled={indexOfLastTask >= task.length}
    className="bg-blue-400 hover:bg-blue-500 text-white font-semibold  px-4 py-1.5 rounded-lg shadow-md transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed">
    Suivant
  </button>
</div>
)
};

export default Pagination;
