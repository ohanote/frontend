import next from "next";
import React from "react";
import { FiPlus } from "react-icons/fi";

const TasksTable = async () => {
  const response = await fetch("https://todo-app-api-omega.vercel.app/tasks");

  const tasks = await response.json();

  return (
    <div className="w-full p-2 flex flex-col gap-2">
      <div className="grid grid-cols-6 w-full pt-2 pb-1 border-b-2 border-slate-600">
        <p className="col-span-2 border-x-2 border-x-slate-600 px-3">Task name</p>
        <p className="border-r-2 border-r-slate-600 px-3"> Project</p>
        <p className="border-r-2 border-r-slate-600 px-3"> Finish Date</p>
        <p className="border-r-2 border-r-slate-600 px-3"> Start Hour</p>
        <p className="border-r-2 border-r-slate-600 px-3"> Finish Hour</p>
      </div>
      {tasks.map((e: any) => {
        return (
          <div
            key={e.id}
            className="grid grid-cols-[1fr_repeat(5,_100px)] w-full text-sm py-2 bg-slate-800 hover:bg-slate-700 border-l-8 border-l-lime-400"
          >
            <p className=" pl-3">{e.name}</p>
            <p>{e.category}</p>
            <p>{e.taskDate}</p>
            <p>{e.startHour}</p>
            <p>{e.finishHour}</p>
          </div>
        );
      })}
      <div className="flex items-center px-3 w-full text-sm py-2 bg-slate-950 hover:bg-slate-900 border-l-8 border-l-lime-400 group cursor-pointer">
        <div className="bg-sky-400 p-2 rounded-full items-center justify-center">
          <FiPlus className="text-white cursor-pointer group-hover:scale-125" />
        </div>
        <span className="pl-3">Add New Task</span>
      </div>
    </div>
  );
};

export default TasksTable;
