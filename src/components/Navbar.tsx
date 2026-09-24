import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">FitLog</a>
        </div>
        <div className="navbar-center">
          <div className="flex gap-8">
            <a href="" className="font-medium">Workout</a>
            <a href="" className="font-medium">My Plan</a>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
