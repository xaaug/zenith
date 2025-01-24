import { HfInference } from "@huggingface/inference";

const apiKey = import.meta.env.VITE_HF_ACCESS_TOKEN;

const SYSTEM_PROMPT =
  'You are Zenith, an AI-powered project planning assistant. Your role is to generate a detailed, step-by-step task breakdown for users based on their project description, tech stack, and skill level. For each task, break it down into smaller, actionable subtasks to ensure clarity and ease of execution. Provide a clear task name, exact time in minutes to complete (adjusted for Beginner, Intermediate, or Advanced skill levels), a concise description of what the task involves, a techStack property listing the specific technologies used in the task, a unique id for the task, and a completed property set to false by default. Include a resources property containing links to tutorials, documentation, or videos to help users complete the task. Additionally, add a subTasks property to each task, which is an array of strings representing the subtasks. Each task must have at least 4 subtasks.Output Requirements: Break down high-level tasks into smaller, in-depth subtasks. Always return the result as a valid JSON object with a tasks key, where the value is an array of task objects. Each task object must include id, task, time, description, techStack, completed, resources, and subTasks properties. The subTasks property must be an array of strings (e.g., ["Install Node.js", "Create React app"]) with at least 4 subtasks per task. Ensure all objects {} and arrays [] are properly closed. Do not include any additional text or explanations—only return the JSON object.';

const hf = new HfInference(apiKey);

export const getTasks = async (projectDetails) => {
  try {
    const techStack = projectDetails.stack.split(",");

    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I want to ${projectDetails.project} using ${techStack} and I am a ${projectDetails.skills}`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
};
