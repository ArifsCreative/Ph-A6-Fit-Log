"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Workout } from "@/types/workout";

interface WorkoutContextType {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;

  totalExercises: number;
  totalMinutes: number;
  totalCalories: number;
  loaded: boolean;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);
export function WorkoutProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const savedPlan = localStorage.getItem("plan");
    if (savedPlan) {
      setPlan(JSON.parse(savedPlan));
    }
    setInitialized(true);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem("plan", JSON.stringify(plan));
    }
  }, [plan, initialized]);

  const totalExercises = plan.length;
  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const [saved, setSaved] = useState<Workout[]>([]);
  useEffect(() => {
    const savedWorkouts = localStorage.getItem("saved");
    if (savedWorkouts) {
      setSaved(JSON.parse(savedWorkouts));
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("saved", JSON.stringify(saved));
    }
  }, [saved, loaded]);

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

  function removeFromSaved(id: number) {
    setSaved((prev) => {
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
        removeFromSaved,
        markAsDone,
        totalExercises,
        totalMinutes,
        totalCalories,
        loaded,
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
