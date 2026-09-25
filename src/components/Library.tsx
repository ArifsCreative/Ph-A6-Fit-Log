import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";



interface Props {
    workouts: Workout[];
}


const Library = ({workouts}:Props)=> {

    return (
        <section>
            <div>
                <h2>
                   THE LIBRARY 
                </h2>
                <p>
                    Twelve lifts covering every major muscle group.
                </p>
                <div>
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