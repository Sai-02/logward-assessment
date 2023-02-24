import React, { useState } from "react";
import AddNewCategoryModal from "./AddNewCategoryModal";

const Sidebar = () => {
  const [shouldOpenNewCategoryModal, setShouldOpenNewCategoryModal] =
    useState(false);

  const openNewCategoryModal = () => {
    setShouldOpenNewCategoryModal(true);
  };
  return (
    <div className="p-2 shadow h-full">
      <div className="p-4 mb-3">Sai Prashant </div>
      <div className="">
        {[...new Array(6)].map(() => {
          return (
            <div className="flex justify-between p-4 hover:bg-[#00000024] cursor-pointer">
              <span className="">Data</span>
              <span className="">0</span>
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
