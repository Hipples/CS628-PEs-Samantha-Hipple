import axios from 'axios';

const apiHost = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT || 3001;
const apiURL = `${apiHost}:${apiPort}`;

// get all recipes from backend API database
export const getRecipes = async () => {
  try {
    const response = await axios.get(`${apiURL}/recipe`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
} 
// get a single recipe by id
export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/recipe/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe by id:', error);
    throw error;
  }
}
// add a new recipe to the database
export const createRecipe = async (recipeData) => {
  try {
    // ensure recipeData has the fields: name, ingredients, and instructions
    if (!recipeData.name || !recipeData.ingredients || !recipeData.instructions) {
      throw new Error("Incomplete recipe data");
    }
    const response = await axios.post(`${apiURL}/recipe`, recipeData, {
      headers: { 'Content-Type': 'application/json' }
    });
    // depending on your needs, you can return the entire response, or just part of it.
    return response.data;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error;
  }
};
