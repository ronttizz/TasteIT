import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const axios = require("axios").default;

  useEffect(() => {
    axios.get("http://localhost:3010/recipes").then((res) => setRecipes(res.data));
  }, []);

  return (
    <div className="main">
      <h1 className="header">Recipes</h1>
      <div className="recipecontainer">
        {recipes.map((item) => {
          let flagurl = "";
          axios
            .get("https://restcountries.com/v3.1/name/" + item.origin)
            .then((res) => (flagurl = res.data[0].flags.svg));
          console.log(flagurl);
          return <RecipeCard {...item} key={item.id} flag={flagurl} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
