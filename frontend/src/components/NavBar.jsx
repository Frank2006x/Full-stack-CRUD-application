import React from "react";
import ModalForm from "./ModalForm";
const NavBar = ({onOpen}) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center">
          <input type="text" placeholder="Search" className="input" />
        </div>

        <div className="navbar-end">
          <button onClick={onOpen} className="btn btn-primary">Add clients</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
