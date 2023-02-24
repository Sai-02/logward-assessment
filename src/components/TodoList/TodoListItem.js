import React, { useState } from "react";
import DeleteTaskModal from "./DeleteTaskModal";

const TodoListItem = ({ task }) => {
  const [shouldOpenDeleteTask, setShouldOpenDeleteTask] = useState(false);
  const openDeleteTask = () => {
    setShouldOpenDeleteTask(true);
  };
  return (
    <div className="flex justify-between p-3 shadow items-center">
      <h3 className="">{task.name}</h3>
      <button className="text-[red]" onClick={openDeleteTask}>
        Delete
      </button>
      <DeleteTaskModal
        task={task}
        shouldOpen={shouldOpenDeleteTask}
        setShouldOpen={setShouldOpenDeleteTask}
      />
    </div>
  );
};

export default TodoListItem;
