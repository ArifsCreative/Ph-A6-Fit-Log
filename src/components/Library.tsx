import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";



interface Props {
    workouts: Workout[];
}


const Library = ({workouts}:Props)=> {

    return (
        <section id="library" className="px-4 py-12 md:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-black uppercase text-white">
                   THE LIBRARY 
                </h2>
                <p>
                    Twelve lifts covering every major muscle group.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {workouts.map((workout)=>(
                        <WorkoutCard
                        key={workout.id}
                        workout={workout}
                        />
                    ))}
                </div>
            </div>
        </section>
        
    )
}

export default Library;