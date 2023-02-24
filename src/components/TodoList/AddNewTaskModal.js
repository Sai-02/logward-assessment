import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";

const AddNewTaskModal = ({ shouldOpen, setShouldOpen }) => {
  const [taskName, setTaskName] = useState("");
  const addTask = () => {
    closeModal();
  };
  const closeModal = () => {
    setShouldOpen(false);
  };

  return (
    <Dialog open={shouldOpen} sx={{}}>
      <div className=" p-4 min-w-[40vw]">
        <h1 className="">Add Task</h1>
        <input
          type="text"
          className="border-b-2 outline-none w-full mt-8"
          placeholder="Task"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center justify-end mt-6 gap-4 p-4">
        <button className="text-[red]" onClick={closeModal}>
          Back
        </button>
        <button className="text-[blue]" onClick={addTask}>
          Add
        </button>
      </div>
    </Dialog>
  );
};

export default AddNewTaskModal;
