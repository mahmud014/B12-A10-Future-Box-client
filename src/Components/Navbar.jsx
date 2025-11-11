import React, { use } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You’ll need to log in again to continue.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f97316",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Logged out successfully!",
              showConfirmButton: false,
              timer: 2500,
              timerProgressBar: true,
            });
          })
          .catch(() => {
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "error",
              title: "Logout Failed",
              text: "Please try again.",
              showConfirmButton: false,
              timer: 3500,
              timerProgressBar: true,
            });
          });
      }
    });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allreviews">All Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto ">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn-ghost text-2xl font-bold">
            Dish<span className="text-orange-500">Dive</span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          {user ? (
            <div className="dropdown dropdown-end">
              {/* User Image Button */}
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/MBtjqXQ/default-user.png"
                    }
                    alt={user.displayName || "User"}
                  />
                </div>
              </label>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2"
              >
                <li>
                  <a href="/add-review" className="hover:bg-orange-100">
                    Add Review
                  </a>
                </li>
                <li>
                  <a href="/my-reviews" className="hover:bg-orange-100">
                    My Reviews
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left hover:bg-orange-100"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary ">
              Login
            </Link>
          )}
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
