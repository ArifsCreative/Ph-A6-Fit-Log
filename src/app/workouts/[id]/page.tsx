import { getWorkoutById } from "@/services/workoutApi";
import Image from "next/image";
import WorkoutActions from "@/components/WorkoutActions";

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
            alt="workout.name"
            width={700}
            height={700}
            className=" w-full aspect-square object-cover rounded-xl"
          />
        </div>
        <div className="pt-2">
          <h1 className="text-4xl font-bold uppercase">{workout.name}</h1>

          <p className="mt-4 text-gray-400 text-sm leading-6">
            {workout.description}
          </p>
          <div className="flex gap-3 mt-5">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="pr-6">
            <SpecRow label="Equipment" value={workout.equipment} />

            <SpecRow label="Difficulty" value={workout.difficulty} />

            <SpecRow label="Sets" value={workout.sets} />

            <SpecRow label="Reps" value={workout.reps} />

            <SpecRow label="Duration" value={`${workout.duration} min`} />

            <SpecRow
              label="Calories"
              value={`${workout.caloriesBurned} kcal`}
            />

            <SpecRow label="Rating" value={workout.rating} />

            {/* instructions */}
            <h2 className="mt-8 text-xl font-bold ">INSTRUCTIONS</h2>

            <ol className="mt-4 space-y-4 text-gray-300">
              {workout.instructions.map((instruction, index) => (
                <li key={instruction} className="flex gap-3">
                  <span className="text-gray-400">{index + 1}.</span>
                  <p>{instruction}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-4 mt-8">
            <WorkoutActions workout={workout}/>
          </div>
        </div>
      </div>
    </main>
  );
}

function SpecRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between px-5 py-3 border-b border-gray-700 text-sm">
      <span className="uppercase text-gray-400">{label}</span>

      <span>{value}</span>
    </div>
  );
}
