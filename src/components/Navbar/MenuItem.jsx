import React from "react";
const MenuItem = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 font-bold hover:bg-slate-800 hover:text-fuchsia-700 transition"
    >
      {children}
    </div>
  );
};

export default MenuItem;
