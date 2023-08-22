import { createBrowserRouter } from "react-router-dom";
import RecipeList from "./recipe-list";
import Root from "./root";
import loadRecipes from "../loaders/load-recipes";

const router = createBrowserRouter([
  { path: "/", Component: RecipeList, loader: loadRecipes },
  { path: "*", Component: Root }
]);

export default router;
