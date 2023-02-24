import React from "react";

const Header = () => {
  const date = new Date();
  return (
    <div className="shadow bg-[#42a5f5] p-4">
      <div className="text-white">My day</div>
      <div className="">{date.toLocaleString().split(",")[0]}</div>
    </div>
  );
};

export default Header;
