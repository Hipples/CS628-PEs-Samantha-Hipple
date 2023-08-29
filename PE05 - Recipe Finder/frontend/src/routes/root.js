import { Routes, Route } from "react-router-dom";
import RecipeList from "./recipe-list";
import "../App.css"

const Root = () => (
    <Routes>
      <Route path="/" element={<RecipeList />} />
    </Routes>
);

export default Root;