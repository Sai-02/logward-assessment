import React, { useContext, useState } from "react";
import { TaskContext } from "../../App";
import DeleteTaskModal from "./DeleteTaskModal";

const TodoListItem = ({ task }) => {
  const { tasksObj, setTasksObj, activeList } = useContext(TaskContext);
  const [shouldOpenDeleteTask, setShouldOpenDeleteTask] = useState(false);
  const openDeleteTask = () => {
    setShouldOpenDeleteTask(true);
  };
  const changeStatus = () => {
    const arr = tasksObj[activeList];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === task.id) {
        arr[i].completed = !arr[i].completed;
      }
    }
    const obj = tasksObj;
    obj[activeList] = arr;
    setTasksObj({ ...tasksObj });
  };

  return (
    <div className="flex justify-between p-3 shadow items-center">
      <input type="checkbox" value={task.completed} onClick={changeStatus} />
      <h3 className="">
        {task.completed ? <s>{task.name}</s> : <>{task.name}</>}
      </h3>
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
