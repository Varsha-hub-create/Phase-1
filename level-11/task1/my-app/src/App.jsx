import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./App.css"; // Ensure CSS file exists

const App = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/key", {
          headers: { "Content-Type": "application/json" },
        });
        setApiKey(data.apiKey);
      } catch (error) {
        console.error("Error fetching API Key:", error);
      }
    };

    fetchApiKey();
  }, []);

  return (
    <Router>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home apiKey={apiKey} />} />
        <Route path="/recipe/:id" element={<RecipeDetails apiKey={apiKey} />} />
        <Route path="/search/:query" element={<SearchResults apiKey={apiKey} />} />
        <Route path="/category/:type" element={<CategoryFilter apiKey={apiKey} />} />
      </Routes>
    </Router>
  );
};

// 🏠 Home Component
const Home = ({ apiKey }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!apiKey) return;
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`
        );
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [apiKey]);

  return (
    <div className="container">
      <h1>Popular Recipes</h1>
      <div className="grid">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// 🔎 Search Results Component
const SearchResults = ({ apiKey }) => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!apiKey) return;
    const searchRecipes = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`
        );
        setResults(data.results);
      } catch (error) {
        console.error("Search error:", error);
      }
    };

    searchRecipes();
  }, [query, apiKey]);

  return (
    <div className="container">
      <h1>Search Results for "{query}"</h1>
      <div className="grid">
        {results.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const RecipeDetails = ({ apiKey }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (!apiKey) return;
    const fetchRecipe = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
        );
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipe();
  }, [id, apiKey]);

  if (!recipe) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
    </div>
  );
};

const CategoryFilter = ({ apiKey }) => {
  const { type } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!apiKey) return;
    const fetchRecipesByCategory = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${type}`
        );
        setRecipes(data.results);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipesByCategory();
  }, [type, apiKey]);

  return (
    <div className="container">
      <h1>{type} Recipes</h1>
      <div className="grid">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default App;
