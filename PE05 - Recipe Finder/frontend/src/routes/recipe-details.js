import { useLocation } from "react-router-dom";

const RecipeDetails = () => {
  const location = useLocation();
  const recipe = location.state.recipe;

  return (
    <div key={recipe._id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
