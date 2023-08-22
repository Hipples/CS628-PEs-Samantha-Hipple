import { json } from 'react-router-dom';

import { getRecipes } from '../services/api';

const loadRecipes = async () => {
  try {
    const recipes = await getRecipes();
    return json(recipes, { status: 200 });
  } catch (error) {
    if (error.response) {
      throw new Response("Failed to fetch recipes", { status: error.response.status });
    } else {
      throw new Response("Unknown error occurred", { status: 500 });
    }
  }
}

export default loadRecipes;