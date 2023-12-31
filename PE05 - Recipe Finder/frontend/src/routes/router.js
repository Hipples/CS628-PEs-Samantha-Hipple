import { createBrowserRouter } from "react-router-dom";
import RecipeList from "./recipe-list";
import Root from "./root";
import loadRecipes from "../loaders/load-recipes";
import RecipeDetails from "./recipe-details";
import CreateRecipe from "./create-recipe";

const router = createBrowserRouter([
  { path: "/", Component: RecipeList, loader: loadRecipes, 
      children: [{ path: "/:id", Component: RecipeDetails, loader: loadRecipes }] },
  { path: "/add-recipe", Component: CreateRecipe },
  { path: "*", Component: Root }
]);

export default router;
