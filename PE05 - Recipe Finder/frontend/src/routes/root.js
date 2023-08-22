import { Routes, Route } from "react-router-dom";
import RecipeList from "./recipe-list";

const Root = () => (
  <Routes>
    <Route path="/" element={<RecipeList />} />
  </Routes>
);

export default Root;