"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sortOptions = [
  "Duration",
  "Calories",
  "Rating",
];

export default function SortDropdown() {
  const [selected, setSelected] = useState("Duration");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-3">

      <span className="text-sm text-gray-400">
        Sort By
      </span>


      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          rounded-lg
          border border-[#29303d]
          bg-[#151820]
          px-4 py-2
          text-sm text-white
        "
      >
        {selected}

<ChevronDown
  size={16}
  className={`
    transition-transform
    duration-200
    ${open ? "rotate-180" : ""}
  `}
/>
      </button>


      {open && (
        <div
          className="
            absolute
            right-0
            top-11
            z-20
            w-36
            rounded-lg
            border
            border-[#29303d]
            bg-[#151820]
          "
        >
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="
                block
                w-full
                px-4
                py-2
                text-left
                text-sm
                text-gray-300
                hover:bg-[#b6ff00]
                hover:text-black
              "
            >
              {option}
            </button>
          ))}
        </div>
      )}

    </div>
  );
}