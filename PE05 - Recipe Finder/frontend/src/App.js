import './App.css'

import useRecipes from './hooks/use-recipes'

const App = () => {
  const { recipes, loading, error } = useRecipes();

  loading ? <div></div> 
  return (

  );
}