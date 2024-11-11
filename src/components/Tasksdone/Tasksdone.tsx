import { motion } from 'framer-motion';
import React, { FC, useState } from 'react';
import DoneHeader from '../DoneHeader/DoneHeader';

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
  },
  Pagination : React.FC,
}

const Tasksdone: FC<TasksProps> = ({transmittedTask}, Pagination) => {
  const [Taskdone, setTaskdone] = useState<TaskdoneInterface[]>([]); 

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
      <DoneHeader/>
        <Pagination Tasks={Taskdone} />
    </div>
  );
};
export default Tasksdone;
