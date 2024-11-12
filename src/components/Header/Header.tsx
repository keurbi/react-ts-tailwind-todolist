import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form"

interface HeaderProps {
  addTask : (taskData: {title : string, difficulty : number, status : string}) => void;
}

type Inputs = {
  title : string
  difficulty : number
  status : string
}

const Header: FC<HeaderProps> = ({ addTask }) => {
  const {register, handleSubmit, reset} = useForm<Inputs>();

  return (
    <div className="flex gap-4 items-center h-[15%]">
      <h2 className="text-xl underline w-2/12 text-center">Manage your tasks</h2>
      <form 
              onSubmit={handleSubmit((data) => {
                addTask(data);
                reset();
              })}className="flex gap-4 items-center w-full"
      >
        <input 
          {...register("title", {required: true})}
          placeholder="Add a task"
          className="w-8/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        
        <select 
          {...register("difficulty", {required: true, valueAsNumber:true})}
          className="w-3/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="1">Facile 🟢</option>
          <option value="2">Moyen 🟠</option>
          <option value="3">Difficile 🔴</option>
        </select>

        <select 
          {...register("status", {required: true})}
          className="w-3/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="todo">To do</option>
          <option value="pending">Pending</option>
          <option value="done">Done</option>
        </select>

        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          OK
        </button>
      </form>
    </div>
  );
};

export default Header;
