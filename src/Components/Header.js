import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navBar">
      <p className="navItem">
        <NavLink to="/" className="linkactive">
          TasteIt
        </NavLink>
      </p>
      <ul className="navList">
        <li className="navItem">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "linkactive" : "link")}
          >
            Home
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            to="/recipes"
            className={({ isActive }) => (isActive ? "linkactive" : "link")}
          >
            Recipes
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            to="/addrecipe"
            className={({ isActive }) => (isActive ? "linkactive" : "link")}
          >
            Add new recipe
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
