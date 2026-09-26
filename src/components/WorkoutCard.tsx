import { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

interface Props {
  workout: Workout;
}

const WorkoutCard = ({ workout }: Props) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="overflow-hidden rounded-xl border border-[#252933] bg-[#15171D] transition-all duration-300  hover:border-[#CCFF00]">
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

          <h3 className="mt-3 text-sm font-black uppercase tracking-wide text-white">
            {workout.name}
          </h3>
          <p className="mt-1 text-xs text-gray-400">
            {workout.equipment}
          </p>
          <div 
          className="mt-4 border-t border-[#252933] pt-3 flex items-center gap-8 text-[10px] text-gray-400 ">
            <span className="flex items-center gap-1">
              <Image src="/icons/clock.svg" alt="" width={12} height={12} />
                {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <Image src="/icons/kcel.svg" alt="" width={12} height={12} />
                {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <Image src="/icons/star.svg" alt="" width={12} height={12} />
                {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;