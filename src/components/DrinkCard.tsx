import { useAppStore } from "../stores/useAppStore";
import type { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const selectRecipe = useAppStore((state) => state.selectRecipe);
  return (
    <div className="shadow-lg border border-gray-300">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`Image of ${drink.strDrink}`}
          className="hover:scale-125 transition-transform hover:rotate-2"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button
          type="button"
          className="bg-pink-400 hover:bg-pink-500 mt-5 w-full p-3 font-bold text-white text-lg cursor-pointer"
          onClick={() => selectRecipe(drink.idDrink)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
