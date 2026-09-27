import Hero from "@/components/Hero";
import Library from "@/components/Library";
import { getWorkouts } from "@/services/workoutApi";

const page = async () => {

  const workouts = await getWorkouts();
  return (
    <>
      <Hero />

      <section id="workouts">
      <Library workouts={workouts} />
      </section>
         
    </>
  );
  
};



export default page;
