import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        // Fetch all prompts from the database and populate the 'creator' field.
        const prompts = await Prompt.find({}).populate('creator');

        // Return a JSON response with the fetched prompts 
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        // If an error occurs during the process, return an error response with a 500 status code
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 

// The code essentially handles the GET request, connects to the database, retrieves all prompts, populates the creator field, and returns the fetched prompts as a JSON response.