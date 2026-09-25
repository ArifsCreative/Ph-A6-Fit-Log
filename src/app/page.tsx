import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Library from "@/components/Library";
import { getWorkouts } from "@/services/workoutApi";

const page = async () => {

  const workouts = await getWorkouts();
  return (
    <>
      <Navbar />
      <Hero />
      <Library workouts={workouts} />
         
    </>
  );
};

export default page;
