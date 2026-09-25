import { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

interface Props {
  workout: Workout;
}

const WorkoutCard = ({ workout }: Props) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div>
        <div>
          <Image src={workout.image}
          alt="" width={400} height={250}
          />
        </div>

        <div>
          <div>
            {workout.muscleGroups.map((group) => (
              <span key={group}>

              {group} 
              </span>
            ))}
          </div>

          <h3>
            {workout.name}
          </h3>
          <p>
            {workout.equipment}
          </p>
          <div>
            <span>
                {workout.duration} min
            </span>

            <span>
                {workout.caloriesBurned} kcal
            </span>
            <span>
                {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;