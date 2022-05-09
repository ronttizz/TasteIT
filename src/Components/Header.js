import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navBar">
      <p className="navItem">
        <Link to="/" className="link">
          TasteIt
        </Link>
      </p>
      <ul className="navList">
        <li className="navItem">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link to="/recipes" className="link">
            Recipes
          </Link>
        </li>
        <li className="navItem">
          <Link to="/addrecipe" className="link">
            Add new recipe
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
