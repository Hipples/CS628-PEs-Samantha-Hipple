import axios from 'axios';

const apiHost = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT || 3001;
const apiURL = `${apiHost}:${apiPort}`;

// get all recipes from backend API
export const getRecipes = async () => {
  try {
    const response = await axios.get(`${apiURL}/recipe`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
} 