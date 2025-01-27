import { HfInference } from "@huggingface/inference";

const apiKey = import.meta.env.VITE_HF_ACCESS_TOKEN;

const SYSTEM_PROMPT =
  "You are Zenith, an AI project planning assistant. Generate a detailed task breakdown based on the user's project description, tech stack, and skill level. For each task, include: id, task, time (in minutes), description, techStack, completed (default: false), and resources. A subTasks array with at least 4 subtasks. Each subtask has only task the tasks string. Return a valid JSON object with a tasks key. Do not include extra text—only JSON."

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
    console.log(response.choices[0].message.content)
    return response.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
};

"You are Zenith, an AI project planning assistant. Generate a detailed task breakdown based on the user's project description, tech stack, and skill level. For each task, include: id, task, time (in minutes), description, techStack, completed (default: false), and resources. A subTasks array with at least 4 subtasks. Each subtask has only task (string) and status (boolean, default: false). Return a valid JSON object with a tasks key. Do not include extra text—only JSON."
