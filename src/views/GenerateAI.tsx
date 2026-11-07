import type { SubmitEvent } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function GenerateAI() {
  const showNotification = useAppStore((state) => state.showNotification);
  const generateRecipe = useAppStore((state) => state.generateRecipe);
  const recipe = useAppStore((state) => state.recipe);
  const isGenerating = useAppStore((state) => state.isGenerating);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const prompt = form.get("prompt") as string;
    const promptTrimmed = prompt.trim();
    if (promptTrimmed === "") {
      showNotification({ text: "The search cannot be empty", error: true });
      return;
    }
    await generateRecipe(promptTrimmed);
  };

  return (
    <>
      <h1 className="text-6xl font-extrabold">Generate Recipe with AI</h1>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 py-10">
          <div className="relative">
            <input
              name="prompt"
              id="prompt"
              className="border bg-white p-4 rounded-lg w-full border-slate-800"
              placeholder="Generate a recipe with ingredients. E.g., a drink with tequila and strawberry."
            />
            <button
              type="submit"
              aria-label="Send"
              className={`cursor-pointer absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2 ${isGenerating ? "cursor-not-allowed opacity-50" : ""}`}
              disabled={isGenerating}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </form>

        {isGenerating && <p className="animate-wiggle">Generating...</p>}
        <div className="py-10 whitespace-pre-wrap">{recipe}</div>
      </div>
    </>
  );
}
