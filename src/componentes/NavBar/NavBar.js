import React from "react";
import "../CarWidget/CarWidget.js";
import CarWidget from "../CarWidget/CarWidget.js";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="menu-container">
      <div className="nav-logo">
        <a Classname="nav-link" href="#">
          Racing store
        </a>
      </div>
      <ul className="nav-list">
        <li>
          <a className="nav-list" href="#">
            inicio
          </a>
        </li>
        <li>
          <a className="nav-list" href="#">
            catalogo
          </a>
        </li>
        <li>
          <a className="nav-list" href="#">
            contactos
          </a>
        </li>
        <li>
          <CarWidget />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;