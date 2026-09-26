"use client";

import Image from "next/image";
import Link from "next/link";

import { Workout } from "@/types/workout";
import { useWorkout } from "@/context/WorkoutContext";

export default function PlanWorkoutCard({ workout }: { workout: Workout }) {
  const { removeFromPlan, markAsDone } = useWorkout();

  return (
    <div
      className="
     flex
      items-center
      justify-between
   bg-[#151820]
     border
   border-[#252b36]
     rounded-xl
       p-4
"
    >
      {/* LEFT SECTION */}

      <div
        className="
flex
items-center
gap-4
"
      >
        <Image
          src={workout.image}
          alt={workout.name}
          width={145}
          height={80}
          className="
rounded-lg
object-cover
w-[145px]
h-[80px]
"
        />

        <div>
          <h2
            className="
font-bold
text-xl
uppercase
"
          >
            {workout.name}
          </h2>

          <p
            className="
text-gray-400
text-sm
"
          >
            {workout.equipment}
          </p>

          <div
            className="
flex
gap-4
mt-3
text-sm
text-gray-300
"
          >
            <span>🕒 {workout.duration} min</span>

            <span>🔥 {workout.caloriesBurned} kcal</span>

            <span>⭐ {workout.rating}</span>
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}

      <div
        className="
flex
items-center
gap-3
"
      >

        <Link

href={`/workouts/${workout.id}`}

className="
border
border-gray-600
px-5
py-2
rounded-full
text-sm
"

>

View Details

</Link>

        <button

onClick={()=>{
    markAsDone(workout.id);
}}

className="
bg-[#CCFF00]
text-black
px-5
py-2
rounded-full
font-semibold
text-sm
"

>

✓ Mark as Done

</button>


<button

onClick={()=>{
    removeFromPlan(workout.id);
}}

className="
text-gray-400
text-xl
"

>

×

</button>
      </div>
    </div>
  );
}
