import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Recipe = () => {
  const axios = require("axios").default;
  const params = useParams();

  const [recipe, setRecipe] = useState([]);
  const [flag, setFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/225px-No_flag.svg.png?20220314051100"
  );

  useEffect(() => {
    axios
      .get("http://localhost:3010/recipes/" + params.id)
      .then((res) => setRecipe(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/" + recipe.origin)
      .then((res) => setFlag(res.data[0].flags.svg));
  }, []);

  return (
    <div className="recipe">
      <h1>{recipe.name}</h1>
      <p>{recipe.author}</p>
      <p>{recipe.imageurl}</p>
      <p>{flag}</p>
      {recipe.ingredients.map((ingredient) => {
        return (
          <p>
            {ingredient.amount} - {ingredient.ingredient}
          </p>
        );
      })}
      <p>{recipe.preparations}</p>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default Recipe;
