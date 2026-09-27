"use client";
import Link from "next/link";
import Image from "next/image";
import { useWorkout } from "@/context/WorkoutContext";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  const { plan, saved, loaded } = useWorkout();

  return (
    <nav className="navbar sticky top-0 z-50 bg-base-300 border border-[#253933] px-4 py-4 text-white md:px-8 md:py-6">
      <div className="navbar-start">
        <div className="flex gap-2 items-center text-lg md:text-xl font-bold">
          <Link href="/" className="flex items-center gap-3">
            <Image src={Logo} alt="" width={32} height={32} />
            <span className="font-bold text-xl">FITLOG</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <div className="flex gap-4">
          <Link href="/#workouts" className="px-4 py-2 font-medium">
            Workout
          </Link>
          <Link href="/my-plan" className="px-4 py-2 font-medium">
            My Plan
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-2 text-xs  md:text-sm font-medium">
            <span>Plan</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] text-xs font-bold text-black">
              {loaded ? plan.length : " "}
            </span>
          </div>

          <div className="flex items-center gap-1 md:gap-2 text-xs  md:text-sm font-medium">
            <span>Saved</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2D313B] bg-base-300 text-xs font-bold text-white">
              {saved.length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
