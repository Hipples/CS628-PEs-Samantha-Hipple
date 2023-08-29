import { useLoaderData, Outlet, Link } from "react-router-dom";

const RecipeList = () => {
  const { recipes, status } = useLoaderData();

  return (
    <div>
      {(status !== 200 && status !== 304) ? (
        <p>Error: Failed to fetch recipes. {status}</p>
      ) : recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <Link to={`${recipe._id}`} state={{ recipe }}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
}

export default RecipeList;
