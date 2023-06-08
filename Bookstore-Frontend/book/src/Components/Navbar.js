import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/book" className="navbar-link">Books</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link">Cart</Link>
        </li>
        <li className="navbar-item">
          <Link to="/reviews" className="navbar-link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

