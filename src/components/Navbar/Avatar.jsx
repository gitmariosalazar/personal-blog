import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Avatar = ({ src, height, width }) => {
  if (src) {
    return (
      <img
        src={src}
        alt="Avatar"
        height={height}
        width={width}
        className="rounded-full"
      />
    );
  } else {
    return <FaUserCircle size={height || width} className="rounded-full" />;
  }
};

export default Avatar;
