import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/api";
import { useState, useEffect } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p className="loading">Loading recipe details...</p>;
  }

  return (
    <div className="recipe-details-card" key={recipe._id}>
      <h2>{recipe.name}</h2>
      <div className="ingredients-section">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="directions-section">
        <h3>Directions</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
