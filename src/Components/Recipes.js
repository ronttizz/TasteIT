import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3010/recipes")
      .then((res) => {
        setRecipes(res.data);
        setLoading(false);
      })
      .catch((err) => console.log("Error with the database ", err));
  }, []);

  return (
    <div className="main">
      <h1 className="header">Recipes</h1>
      <div className="recipecontainer">
        {!loading ? (
          recipes.map((recipe) => {
            return <RecipeCard {...recipe} key={recipe.id} />;
          })
        ) : (
          <p>Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
