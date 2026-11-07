import { createOpenRouter } from "@openrouter/ai-sdk-provider";

// Si se define VITE_OPENROUTER_KEY se llama directamente a OpenRouter (ej. despliegue estatico sin backend).
// Por defecto, se utiliza el proxy inverso (/api/openrouter) para que la API key nunca se exponga en el navegador.
const directKey = import.meta.env.VITE_OPENROUTER_KEY;

export const openrouter = createOpenRouter({
  baseURL: directKey ? undefined : "/api/openrouter",
  apiKey: directKey || "proxy",
});
