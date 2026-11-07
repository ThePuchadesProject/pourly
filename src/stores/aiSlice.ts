import type { StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISlice = {
  recipe: string;
  isGenerating: boolean;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISlice> = (set) => ({
  recipe: "",
  isGenerating: false,
  generateRecipe: async (prompt) => {
    set({ recipe: "", isGenerating: true });
    try {
      const data = await AIService.generateRecipe(prompt);

      for await (const textPart of data) {
        set((state) => ({
          recipe: state.recipe + textPart,
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isGenerating: false });
    }
  },
});
