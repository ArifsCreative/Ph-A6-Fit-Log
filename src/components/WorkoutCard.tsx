import { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

interface Props {
  workout: Workout;
}

const WorkoutCard = ({ workout }: Props) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="overflow-hidden rounded-xl border border-[#252933] bg-[#15171D] transition hover:border-[#CCFF00]">
        <div className="h-44 w-full">
          <Image src={workout.image}
          alt="" width={400} height={250} className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4">
          <div className="flex gap-2">
            {workout.muscleGroups.map((group) => (
              <span key={group} className="rounded-full bg-[#CCFF00] px-2 py-1 text-[10px] font-bold text-black">

              {group} 
              </span>
            ))}
          </div>

          <h3 className="mt-3 text-sm font-black uppercase text-white">
            {workout.name}
          </h3>
          <p className="mt-1 text-xs text-gray-400">
            {workout.equipment}
          </p>
          <div className="mt-4 flex justify-between text-[11px] text-gray-400 ">
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