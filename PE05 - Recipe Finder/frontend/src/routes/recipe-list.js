import { useLoaderData, Outlet, Link } from "react-router-dom";

import Navbar from "../components/navbar";
import Header from "../components/header";
import "../App.css"

const RecipeList = () => {
  const { recipes, status } = useLoaderData();

  return (
    <div className="app-container">
      <Navbar />
      <Header />

      {(status !== 200 && status !== 304) ? (
        <p>Error: Failed to fetch recipes. {status}</p>
      ) : recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <Link to={recipe._id}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
}

export default RecipeList;
