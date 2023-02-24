import React, { useState } from "react";
import AddNewTaskModal from "./AddNewTaskModal";

const TodoList = () => {
  const [shouldOpenAddNewTaskModol, setShouldOpenAddNewTaskModal] =
    useState(false);
  return (
    <div className="p-4">
      <div className="">
        {[...new Array(5)].map(() => {
          return <div className="">Name of the task gotcha now that!!</div>;
        })}
      </div>
      <div className="mt-6">
        <button className="text-[#42a5f5]">+ Add New Task</button>
      </div>
      <AddNewTaskModal
        shouldOpen={shouldOpenAddNewTaskModol}
        setShouldOpen={setShouldOpenAddNewTaskModal}
      />
    </div>
  );
};

export default TodoList;
