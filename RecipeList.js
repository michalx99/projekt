import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.recipe.label} className="recipe-card">
          <h2>{recipe.recipe.label}</h2>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <ul>
            {recipe.recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
            Zobacz przepis
          </a>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;