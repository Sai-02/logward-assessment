import Dialog from "@mui/material/Dialog";
import React, { useContext, useState } from "react";
import { TaskContext } from "../../App";

const AddNewCategoryModal = ({ shouldOpen, setShouldOpen }) => {
  const [categoryName, setCategoryName] = useState("");
  const { tasksObj, setTasksObj } = useContext(TaskContext);
  const addCategpry = () => {
    const obj = tasksObj;
    obj[categoryName] = [];
    setTasksObj({ ...obj });
    setCategoryName("");
    closeModal();
  };
  const closeModal = () => {
    setShouldOpen(false);
  };

  return (
    <Dialog open={shouldOpen} sx={{}}>
      <div className=" p-4 min-w-[40vw]">
        <h1 className="">Add New Category</h1>
        <input
          type="text"
          className="border-b-2 outline-none w-full mt-8"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center justify-end mt-6 gap-4 p-4">
        <button className="text-[red]" onClick={closeModal}>
          Back
        </button>
        <button className="text-[blue]" onClick={addCategpry}>
          Add
        </button>
      </div>
    </Dialog>
  );
};

export default AddNewCategoryModal;
