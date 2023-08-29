import { useState } from "react";

import "../App.css"

const CreateRecipe = () => {
  const blankForm = { name: "", ingredients: [""], instructions: "" };
  const [form, setForm] = useState(blankForm);

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...form.ingredients];
    updatedIngredients[index] = value;
    setForm({ ...form, ingredients: updatedIngredients });
  };

  const addIngredientField = () => {
    setForm({ ...form, ingredients: [...form.ingredients, ""] });
  };

  const removeIngredientField = (index) => {
    const updatedIngredients = [...form.ingredients];
    updatedIngredients.splice(index, 1);
    setForm({ ...form, ingredients: updatedIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can make an API call or other actions to save the recipe
    console.log("Recipe Submitted:", form);
    setForm(blankForm);  // Reset form after submission
  };

  return (
    <div className="recipe-form-container">
      <h2>Add Your Recipe!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipeName">Recipe Name:</label>
          <input
            type="text"
            id="recipeName"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <h3>Ingredients:</h3>
        {form.ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              required
            />
            <button type="button" onClick={() => removeIngredientField(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addIngredientField}>Add Ingredient</button>

        <div>
          <h3>Directions:</h3>
          <textarea
            value={form.instructions}
            onChange={(e) => setForm({ ...form, instructions: e.target.value })}
            required
          />
        </div>

        <div>
          <button type="submit">Submit Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
