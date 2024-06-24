import React, { useState } from 'react';
import './App.css'; 
import Header from './Header';
import Search from './Search';
import RecipeList from './RecipeList';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=19d05f2e&app_key=5008d81f37cc944f4239cb7ea5482ea5	—
`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="app">
      <Header />
      <Search onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;