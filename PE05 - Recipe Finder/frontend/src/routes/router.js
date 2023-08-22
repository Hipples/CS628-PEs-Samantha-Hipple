import { createBrowserRouter } from "react-router-dom";
import RecipeList from "./recipe-list";
import Root from "./root";

const router = createBrowserRouter([
  { path: "/", Component: RecipeList},
  { path: "*", Component: Root }
]);

export default router;
