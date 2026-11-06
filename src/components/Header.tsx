import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type SubmitEvent,
} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const showNotification = useAppStore((state) => state.showNotification);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedFields = {
      category: searchFilters.category,
      ingredient: searchFilters.ingredient.trim(),
    };

    // Validar
    if (Object.values(trimmedFields).includes("")) {
      showNotification({ error: true, text: "All fields are mandatory" });
      return;
    }

    // Consultar las recetas
    searchRecipes(trimmedFields);
  };

  return (
    <header
      className={
        isHome
          ? `bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center`
          : "bg-indigo-950"
      }
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img className="w-32" src="/logo.svg" alt="Pourly Logo" />
            </Link>
          </div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-400 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-400 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favorites
            </NavLink>
            <NavLink
              to="/generate"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-400 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Generate with AI
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-pink-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Name or Ingredients
              </label>

              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                placeholder="Name or Ingredient. E.g., Vodka, Tequila, Coffee"
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Category
              </label>

              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option value="">-- Select --</option>
                {categories.drinks.map((category) => (
                  <option
                    value={category.strCategory}
                    key={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Search Recipes"
              className="cursor-pointer bg-pink-800 hover:bg-pink-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
}
