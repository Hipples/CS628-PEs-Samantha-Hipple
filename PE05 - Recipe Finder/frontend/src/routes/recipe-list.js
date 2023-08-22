import useRecipes from "../hooks/use-recipes";

const RecipeList = () => {
  // destructure the values returned by the useRecipes hook
  const { recipes, loading, error } = useRecipes();
  // render different content based on API reponse
  return (
    <div>
      {error ? (  // if there is an error
        <p>Error: {error.message}</p> 
      // while loading is true
      ) : loading ? (
        <p>Loading...</p> 
      // if no recipes are found
      ) : recipes.length === 0 ? (
        <p>No recipes found.</p>
      // otherwise display the list of recipe names
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