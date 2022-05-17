import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3010/recipes")
      .then((res) => {
        setRecipes(res.data);
        setLoading(false);
      })
      .catch((err) => console.log("Error with the database ", err));
  }, []);

  const search = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="main">
      <div className="searchbar">
        <h1 className="header">Recipes</h1>
        <input
          className="search"
          type="text"
          name="search"
          placeholder="Search recipes by name"
          onChange={search}
        ></input>
      </div>
      <div className="recipecontainer">
        {!loading ? (
          recipes
            .filter((recipe) => {
              if (
                recipe.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
                recipe.author.toLowerCase().includes(searchTerm.toLowerCase().trim())
              ) {
                return recipe;
              }
            })
            .map((recipe) => {
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
