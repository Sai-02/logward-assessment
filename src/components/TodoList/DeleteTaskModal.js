import Dialog from "@mui/material/Dialog";
import React, { useState, useContext } from "react";
import { TaskContext } from "../../App";
const DeleteTaskModal = ({ shouldOpen, setShouldOpen, task }) => {
  const { tasksObj, activeList, setTasksObj } = useContext(TaskContext);

  const deleteTask = () => {
    const obj = tasksObj;
    const arr = obj[activeList];
    const newArr = arr.filter((val) => val.id !== task.id);
    obj[activeList] = newArr;
    setTasksObj({ ...obj });
    closeModal();
  };
  const closeModal = () => {
    setShouldOpen(false);
  };

  return (
    <Dialog open={shouldOpen} sx={{}}>
      <div className=" p-4 min-w-[40vw]">
        <h1 className="">Do you want to delete the task {task.name} ?</h1>
      </div>
      <div className="flex items-center justify-end mt-6 gap-4 p-4">
        <button className="text-[black]" onClick={closeModal}>
          Back
        </button>
        <button className="text-[red]" onClick={deleteTask}>
          Delete
        </button>
      </div>
    </Dialog>
  );
};

export default DeleteTaskModal;
