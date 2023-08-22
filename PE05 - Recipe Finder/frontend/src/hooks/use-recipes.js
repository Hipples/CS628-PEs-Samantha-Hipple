import { useState, useEffect } from 'react';
import { getRecipes } from '../services/api';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipes();
  }, []);
  return { recipes, loading, error }
}

export default useRecipes;