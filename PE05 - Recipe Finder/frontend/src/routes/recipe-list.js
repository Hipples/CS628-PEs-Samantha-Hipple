import { useLoaderData } from "react-router-dom";

// component to display the list of recipe names
const RecipeList = () => {
  // destructure the values returned by the useLoaderData hook
  const { recipes, status } = useLoaderData();
  // render different content based on API response
  return (
    <div>
      {(status !== 200 && status !== 304) ? (
        <p>Error: Failed to fetch recipes. {status}</p>
      ) : recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>{recipe.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
