import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  const menuList = (
    <>
      <Link to="/">
        <li className="ml-8 text-xl font-medium hover:text-orange-600 hover:underline">
          Home
        </li>
      </Link>
      <Link to="/colleges">
        <li className="ml-8 text-xl font-medium hover:text-orange-600 hover:underline">
          Colleges
        </li>
      </Link>
      <Link to="/admission">
        <li className="ml-8 text-xl font-medium hover:text-orange-600 hover:underline">
          Admission
        </li>
      </Link>
      <Link to="/myCollege">
        <li className="ml-8 text-xl font-medium hover:text-orange-600 hover:underline">
          My College
        </li>
      </Link>
      {user ? (
        <Link to="/register">
          <li
            onClick={handleLogOut}
            className="ml-8 text-xl font-medium hover:text-orange-600 hover:underline"
          >
            Log Out
          </li>
        </Link>
      ) : (
        <Link to="/register">
          <li className="ml-8 text-xl font-medium hover:text-orange-600 hover:underline">
            Sign Up
          </li>
        </Link>
      )}
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuList}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-semibold text-orange-600">
            {" "}
            AdmitoPia{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuList}</ul>
        </div>
        <div className="navbar-end">
          {" "}
          <span className="mr-4 text-orange-600 font-serif font-semibold text-xl">
            {" "}
            {user?.displayName}{" "}
          </span>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
