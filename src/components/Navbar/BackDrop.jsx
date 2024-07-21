import React from "react";

const BackDrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="z-20 opacity-50 w-screen h-screen fixed top-0 left-0 bg-slate-600"
    ></div>
  );
};

export default BackDrop;
