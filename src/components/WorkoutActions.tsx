"use client";

import { useWorkout } from "@/context/WorkoutContext";
import { Workout } from "@/types/workout";
import { toast } from "sonner";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveWorkout } = useWorkout();

  return (
    <div
      className="
flex
gap-4
mt-8
"
    >
      <button
        onClick={() => {
          addToPlan(workout);

          toast.success("Added to today's plan");
        }}
        className="
bg-lime-400
text-black
px-5
py-3
rounded-xl
font-semibold
"
      >
        Add to today's plan
      </button>

      <button
        onClick={() => {
          saveWorkout(workout);

          toast.success("Saved for later");
        }}
        className="
border
border-gray-600
px-5
py-3
rounded-xl
font-semibold
"
      >
        Save for later
      </button>
    </div>
  );
}
