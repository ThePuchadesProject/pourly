import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter.chat("xingchen-agi/xing4.0-29b-a4b:free"),
      //   model: openrouter.chat("google/gemma-4-26b-a4b-it:free"),
      //   model: openrouter.chat("liquid/lfm-3-1.7b:free"),
      prompt,
      system:
        "You are a bartender, and users will ask you to prepare drinks based on the combinations they request. Stick to this role; if someone asks for something other than the preparation of a drink, politely decline.",
    });

    return result.textStream;
  },
};
