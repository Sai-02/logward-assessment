import React, { useContext, useEffect, useState } from "react";
import AddNewCategoryModal from "./AddNewCategoryModal";
import { TaskContext } from "../../App";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const Sidebar = () => {
  const {
    tasksObj,
    setActiveList,
    activeList,
    shouldOpenSidebar,
    setShouldOpenSidebar,
  } = useContext(TaskContext);
  const [categoryList, setCategoryList] = useState(Object.keys(tasksObj));
  const [shouldOpenNewCategoryModal, setShouldOpenNewCategoryModal] =
    useState(false);

  useEffect(() => {
    setCategoryList(Object.keys(tasksObj));
  }, [tasksObj]);
  const openNewCategoryModal = () => {
    setShouldOpenNewCategoryModal(true);
  };
  const closeSidebar = () => {
    setShouldOpenSidebar(false);
  };

  return (
    <div className="p-2 shadow h-full">
      {window.screen.width < 640 && shouldOpenSidebar ? (
        <div className="flex justify-end">
          <button onClick={closeSidebar}>
            <CloseRoundedIcon />
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="p-4 mb-3">Sai Prashant </div>
      <div className="">
        {categoryList.map((val) => {
          return (
            <div
              className={`flex justify-between p-4 ${
                activeList === val ? "bg-[#00000024]" : ""
              } cursor-pointer`}
              onClick={() => {
                setActiveList(val);
              }}
            >
              <span className="">{val}</span>
              <span className="">{tasksObj[val]?.length}</span>
            </div>
          );
        })}
      </div>
      <div
        className="text-[#42a5f5] p-4 cursor-pointer"
        onClick={openNewCategoryModal}
      >
        + New Category
      </div>
      <AddNewCategoryModal
        shouldOpen={shouldOpenNewCategoryModal}
        setShouldOpen={setShouldOpenNewCategoryModal}
      />
    </div>
  );
};

export default Sidebar;
