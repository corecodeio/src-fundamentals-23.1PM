import React from "react";
import ButtonNavbar from "./ButtonNavbar";

const Navbar = ({ setStatus }) => {
  const changeStatus = (string) => {
    setStatus(string);
  };
  return (
    <div>
      <ButtonNavbar title="Home" status="home" changeStatus={changeStatus} />
      <ButtonNavbar title="News" status="news" changeStatus={changeStatus} />
      <ButtonNavbar title="Docs" status="docs" changeStatus={changeStatus} />
    </div>
  );
};

export default Navbar;
