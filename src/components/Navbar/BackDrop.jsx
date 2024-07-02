import React from "react";

const BackDrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="z-20 bg-slate-400 opacity-50 w-screen h-screen fixed top-0 left-0"
    ></div>
  );
};

export default BackDrop;
