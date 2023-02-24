import React, { useContext, useEffect, useState } from "react";
import AddNewTaskModal from "./AddNewTaskModal";
import TodoListItem from "./TodoListItem";
import { TaskContext } from "../../App";
const TodoList = () => {
  const [shouldOpenAddNewTaskModol, setShouldOpenAddNewTaskModal] =
    useState(false);
  const { tasksObj, activeList } = useContext(TaskContext);
  const [tasksArr, setTasksArr] = useState(tasksObj[activeList]);
  useEffect(() => {
    setTasksArr(tasksObj[activeList]);
  }, [activeList]);
  const openAddTaskModal = () => {
    setShouldOpenAddNewTaskModal(true);
  };
  return (
    <div className="p-4">
      <div className="">
        {tasksArr.map((val, index) => {
          return <TodoListItem task={val} />;
        })}
      </div>
      <div className="mt-6">
        <button className="text-[#42a5f5]" onClick={openAddTaskModal}>
          + Add New Task
        </button>
      </div>
      <AddNewTaskModal
        shouldOpen={shouldOpenAddNewTaskModol}
        setShouldOpen={setShouldOpenAddNewTaskModal}
      />
    </div>
  );
};

export default TodoList;
