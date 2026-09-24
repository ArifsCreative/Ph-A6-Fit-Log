import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 px-6 py-6 text-white md:px-8">
      <div className="navbar-start">
        <div className="flex gap-2 items-center text-xl font-bold">
          <Image src={Logo} alt="" />
          FITLOG
        </div>
      </div>
      <div className="navbar-center">
        <div className="flex gap-4">
          <a
            href="#"
            className="rounded-md bg-[#CCFF00]/15  px-4 py-2 font-bold text-[#CCFF00]"
          >
            Workout
          </a>
          <a href="" className="px-4 py-2 font-medium">
            My Plan
          </a>
        </div>
      </div>

      <div className="navbar-end">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <span>Plan</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] text-xs font-bold text-black">
              0
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <span>Saved</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2D313B]  bg-base-300 text-xs font-bold text-white">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
