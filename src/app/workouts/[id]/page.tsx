import { getWorkoutById } from "@/services/workoutApi";
import Image from "next/image";

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    return <div>workout not found</div>;
  }

  return (
    <main className="min-h-screen bg-[#111318] text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <Image
            src={workout.image}
            alt="workout.name" width={700} height={700}
            className=" w-full aspect-square object-cover rounded-xl"
          />
        </div>
        <div className="pt-2">
          <h1 className="text-4xl font-bold uppercase">
            {workout.name}
          </h1>

          <p className="mt-4 text-gray-400 text-sm leading-6">
            {workout.description}
          </p>
          <div className="flex gap-3 mt-5">
            {workout.muscleGroups.map((group)=>(
                <span key={group} className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {group}
                </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
