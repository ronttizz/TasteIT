import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3010/recipes").then((res) => setRecipes(res.data));
  }, []);

  return (
    <div className="main">
      <h1 className="header">Recipes</h1>
      <div className="recipecontainer">
        {recipes.map((recipe) => {
          return <RecipeCard {...recipe} key={recipe.id} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
