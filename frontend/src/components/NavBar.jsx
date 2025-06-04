import React from "react";
import ModalForm from "./ModalForm";
const NavBar = ({ onOpen, onSearch }) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Clients</a>
        </div>
        <div className="navbar-center">
          <input
            type="text"
            placeholder="Search"
            className="input"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="navbar-end">
          <button onClick={onOpen} className="btn btn-primary">
            Add clients
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
