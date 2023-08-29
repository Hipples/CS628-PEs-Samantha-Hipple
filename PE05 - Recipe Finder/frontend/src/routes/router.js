import { createBrowserRouter } from "react-router-dom";
import RecipeList from "./recipe-list";
import Root from "./root";
import loadRecipes from "../loaders/load-recipes";
import RecipeDetails from "./recipe-details";

const router = createBrowserRouter([
  { path: "/:id", Component: RecipeDetails, loader: loadRecipes },
  { path: "/", Component: RecipeList, loader: loadRecipes },
  { path: "*", Component: Root }
]);

export default router;
