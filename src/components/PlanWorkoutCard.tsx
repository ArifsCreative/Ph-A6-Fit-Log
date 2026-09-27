"use client";

import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";
import { useWorkout } from "@/context/WorkoutContext";

export default function PlanWorkoutCard({ workout, isSaved, }: { workout: Workout; isSaved?: boolean; }) {
  const { removeFromPlan, removeFromSaved, markAsDone } = useWorkout();

  return (
    <div className=" flex items-center justify-between bg-[#151820] borderborder-[#252b36] rounded-xl p-4 ">

      {/* left section */}
      <div className=" flex items-center gap-4">
        <Image src={workout.image} alt="" width={145} height={80} className=" rounded-lg object-cover w-[145px] h-[80px]" />
        <div>
          <h2 className=" font-bold text-xl uppercase">{workout.name}</h2>

          <p className="text-gray-400 text-sm"
          >
            {workout.equipment}
          </p>

          <div className="flex gap-4 mt-3 text-sm text-gray-300"

          >
            <span className="flex items-center gap-1">
              <Image src="/icons/watchlime.svg" alt="rating" width={16} height={16} className="colo" />
              {workout.duration}
            </span>

            <span className="flex items-center gap-1">
              <Image src="/icons/bookmarklime.svg" alt="rating" width={16} height={16} className="colo" />
              {workout.caloriesBurned}
            </span>

            <span className="flex items-center gap-1">
              <Image src="/icons/starlime.svg" alt="rating" width={16} height={16} className="colo" />
              {workout.rating}
            </span>
          </div>
        </div>
      </div >

      {/* buttons */}

      < div className="flex items-center gap-3" >
        <Link
          href={`/workouts/${workout.id}`}
          className="border border-gray-600 px-5 py-2 rounded-full text-sm">
          View Details
        </Link>

        {!isSaved && (
          <button
            onClick={() => markAsDone(workout.id)}
            className="bg-[#CCFF00] text-black px-5 py-2 rounded-full font-semibold text-sm"
          >
            <span className="flex items-center gap-1">
            <Image src="/icons/check.svg" alt="" width={16} height={16}/>
            Mark as Done
            </span>
          </button>
        )}

        <button
          onClick={() => {
            if (isSaved) {
              removeFromSaved(workout.id);
            } else {
              removeFromPlan(workout.id);
            }
          }}
        >
          <Image src="/icons/close.svg" alt="" width={16} height={16}/>
        </button>
      </div >
    </div >
  );
}
