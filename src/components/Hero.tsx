import Image from "next/image";
import Banner from "@/assets/banner.png";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-base-300 px-4 py-10 md:px-8 lg:py-20">
      <div className="container max-auto max-w-7xl rounded-xl border border-[#253933] bg-base-100 p-6 md:p-8 lg:p-10 flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 text-sm font-bold traking-[0.25] text-[#CCFF00]">
            
            WORKOUT LIBRARY
            </p>
          <h1 className="max-w-xl text-3xl font-black uppercase leading-tight text-white md:text-5xl lg:text-4xl">
            TRAIN WITH INTENT. LOG  <br /> EVERY SET.
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-gray-400 md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
            into today's plan, and watch the week's work add up.
          </p>
          
          <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#CCFF00] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-[#b8e600] "> BROWSE WORKOUTS </a>
        </div>
        <div>
          <Image src={Banner} alt="" className="w-ful object-contain" priority />
        </div>
      </div>
    </section>
  );
};

export default Hero;
