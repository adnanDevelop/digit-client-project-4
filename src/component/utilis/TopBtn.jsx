import React from "react";
import { FiMessageCircle } from "react-icons/fi";

const TopBtn = () => {
    
  return (
    <div
      className={`top-icon`}
    >
      <span className="icon-animation pe-2">
      <FiMessageCircle />
      </span>
      Chat
    </div>
  );
};

export default TopBtn;
