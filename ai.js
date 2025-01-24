import { HfInference } from "@huggingface/inference";

const apiKey = import.meta.env.VITE_HF_ACCESS_TOKEN;

const SYSTEM_PROMPT =
  "You are Zenith, an AI-powered project planning assistant. Your role is to generate a detailed, step-by-step task breakdown for users based on their project description, tech stack, and skill level. For each task, provide a clear task name, exact time in minutes to complete (adjusted for Beginner, Intermediate, or Advanced skill levels), a concise description of what the task involves, and a resources property containing links to tutorials, documentation, or videos to help users complete the task. Always return the result as a valid JSON object with a tasks key, where the value is an array of task objects. Each task object must include task, time, description, and resources properties. Do not include any additional text or explanations—only return the JSON object.";

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
          content: `I want to ${projectDetails.project} using ${techStack}`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
};
