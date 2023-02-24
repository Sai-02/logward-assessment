import { Menu } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { TaskContext } from "../../App";

const Header = () => {
  const { setShouldOpenSidebar, shouldOpenSidebar } = useContext(TaskContext);
  const toggleSidebar = () => {
    setShouldOpenSidebar(!shouldOpenSidebar);
  };
  const { activeList } = useContext(TaskContext);
  const date = new Date();
  return (
    <div className="shadow bg-[#42a5f5] p-4 flex justify-between">
      <div className="">
        <div className="text-white">{activeList}</div>
        <div className="text-white">{date.toLocaleString().split(",")[0]}</div>
      </div>
      <button className="sm:hidden text-white" onClick={toggleSidebar}>
        <Menu />
      </button>
    </div>
  );
};

export default Header;
