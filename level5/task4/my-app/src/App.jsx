import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import './App.css';

const recipes = [
  {
    id: "1",
    title: "Spaghetti Carbonara",
    imageUrl: "../src/speghetti.jpg",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black Pepper"],
    instructions: "Cook spaghetti. In a bowl, mix eggs and cheese. Cook pancetta, then combine everything."
  },
  {
    id: "2",
    title: "Chicken Curry",
    imageUrl: "../src/chiken.jpg",
    ingredients: ["Chicken", "Coconut Milk", "Curry Powder", "Onions", "Garlic"],
    instructions: "Cook onions and garlic. Add chicken and spices. Pour in coconut milk and simmer."
  },
  {
    id: "3",
    title: "Avocado Toast",
    imageUrl: "../src/avocado.jpeg",
    ingredients: ["Avocado", "Bread", "Lemon Juice", "Salt", "Pepper"],
    instructions: "Mash avocado with lemon juice. Spread on toasted bread and season."
  }
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <h1>Recipe Finder</h1>
      <input 
        type="text" 
        placeholder="Search recipes..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h2><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h2>
            <img src={recipe.imageUrl} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  </Router>
);

export default App;