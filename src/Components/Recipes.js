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
      <div className="searchbar">
        <h1 className="header">Recipes</h1>
        <input
          className="search"
          type="text"
          name="search"
          placeholder="Search recipes by name"
        ></input>
      </div>
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
