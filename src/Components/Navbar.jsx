import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-5">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/reviews">Reviews</NavLink>
                  </li>
                  <li>
                    <NavLink to="/favorites">Favorites</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl normal-case">
          DishDive
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Services</summary>
              <ul className="p-2 bg-base-100 rounded-box shadow">
                <li>
                  <NavLink to="/reviews">Reviews</NavLink>
                </li>
                <li>
                  <NavLink to="/favorites">Favorites</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
