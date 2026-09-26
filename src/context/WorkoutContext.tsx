"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import { Workout } from "@/types/workout";

interface WorkoutContextType {
  plan: Workout[];

  saved: Workout[];

  addToPlan: (workout: Workout) => void;

  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id: number) => void;

  markAsDone: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export function WorkoutProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);

  const [saved, setSaved] = useState<Workout[]>([]);

  function addToPlan(workout: Workout) {
    setPlan((prev) => {
      if (prev.find((item) => item.id === workout.id)) return prev;

      return [...prev, workout];
    });
  }

  function saveWorkout(workout: Workout) {
    setSaved((prev) => {
      if (prev.find((item) => item.id === workout.id)) return prev;

      return [...prev, workout];
    });
  }

  function removeFromPlan(id: number) {
    setPlan((prev) => {
      return prev.filter((workout) => workout.id !== id);
    });
  }

  function markAsDone(id: number) {
    setPlan((prev) => {
      return prev.filter((workout) => workout.id !== id);
    });
  }

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        markAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("WorkoutProvider missing");
  }

  return context;
}
