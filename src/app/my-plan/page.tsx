"use client";

import { useState, useEffect } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";
import SortDropdown from "@/components/SortDropdown";

export default function MyPlanPage() {

  const {
    plan,
    saved,
    loaded,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  if (!loaded) {
    return (
      <main className="min-h-screen bg-[#111318] text-white p-8">
        Loading workouts…
      </main>
    );
  }


  return (
    <main className="min-h-screen bg-[#111318] text-white p-8 " >
      <div className="max-w-6xl mx-auto">

        {/* titile */}

        <h1
          className="text-4xl font-bold">
          MY PLAN
        </h1>
        <p
          className="mt-3 text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Metrics */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <div className="border border-gray-700 rounded-xl p-5">
            <p className="text-gray-400">Exercises</p>
            <h2 className="text-3xl font-bold">{currentWorkouts.length}</h2>
          </div>

          <div className="border border-gray-700 rounded-xl p-5">
            <p className="text-gray-400">Minutes</p>
            <h2 className="text-3xl font-bold">
              {currentWorkouts.reduce(
                (total, workout) => total + workout.duration,
                0
              )}
            </h2>
          </div>

          <div className="border border-gray-700 rounded-xl p-5">
            <p className="text-gray-400">Calories</p>
            <h2 className="text-3xl font-bold">
              {currentWorkouts.reduce(
                (total, workout) => total + workout.caloriesBurned,
                0
              )}
            </h2>
          </div>
        </div>

        {/* Tab */}

        <div
          className="flex justify-between items-center mt-10">
          <div
            className="flex gap-4">
            <button
              onClick={() => setActiveTab("plan")}
              className={` px-5 py-2 rounded-lg font-semibold ${activeTab === "plan" ? "bg-white text-black" : "border border-gray-700"} `}>

              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")} className={` px-5 py-2 rounded-lg font-semibold ${activeTab === "saved" ? "bg-white text-black" : "border border-gray-700"}`} >
              Saved
            </button>
          </div>

          {/* dropdown */}
          <SortDropdown />

        </div>

        <div
          className="mt-8 space-y-4 " > {loading ? (
            <p className="text-gray-400">
              Loading workouts…
            </p>
          ) : currentWorkouts.length === 0 ? (
            <div className=" text-center border border-gray-700 rounded-xl p-10 " >
              <h2 className=" text-3xl font-bold" >
                NOTHING HERE YET
              </h2>

              <p className=" mt-3 text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>

              <a href="/" className=" inline-block mt-6 bg-[#CCFF00] text-black px-6 py-3 rounded-xl font-semibold ">
                Go to workouts
              </a>
            </div>
          ) : (
            currentWorkouts.map((workout) => (
              <PlanWorkoutCard
                key={workout.id}
                workout={workout}
                isSaved={activeTab === "saved"}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
