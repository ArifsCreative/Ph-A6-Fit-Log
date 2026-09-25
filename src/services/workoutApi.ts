import { Workout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): promise<Workout[]> {
    const response = await fetch(API_URL);

    if(!response.ok) {
        throw new Error ("Failed to fetch workouts");
    }

    return response.json();
    
}