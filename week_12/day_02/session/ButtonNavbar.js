import React from "react";

const ButtonNavbar = ({ title, status, changeStatus }) => {
  return (
    <button
      onClick={() => {
        changeStatus(status);
      }}
    >
      {title}
    </button>
  );
};

export default ButtonNavbar;
