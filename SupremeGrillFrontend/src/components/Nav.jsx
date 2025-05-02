import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import { NavLink } from "react-router-dom";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-header">
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink
            className="nav-link text-white"
            aria-current="page"
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to="/basket">
            Basket
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to="/staff">
            Staff
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
