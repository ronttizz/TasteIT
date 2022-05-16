import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

const Recipe = () => {
  const params = useParams();

  const [recipe, setRecipe] = useState([]);
  const [flag, setFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/225px-No_flag.svg.png?20220314051100"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3010/recipes/" + params.id).then((res) => {
      setRecipe(res.data);
      setLoading(false);
      Axios.get("https://restcountries.com/v3.1/name/" + res.data.origin).then((res) => {
        setFlag(res.data[0].flags.svg);
      });
    });
  }, []);

  const alttext = `An image of ${recipe.name}`;
  const flagtext = `Flag of ${recipe.origin}`;

  return (
    <div className="recipe">
      <div className="left-column">
        <img src={recipe.imageurl} className="foodimage" alt={alttext} />
        <img src={flag} className="flag" alt={flagtext} />
        <h4>Ingredients: </h4>
        <table className="table">
          <tbody>
            {!loading &&
              recipe.ingredients.map((ingredient) => {
                return (
                  <tr key={ingredient.id}>
                    <td className="tablerow">
                      {ingredient.amount} - {ingredient.ingredient}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="right-column">
        <h1>{recipe.name}</h1>
        <p>By: {recipe.author}</p>
        <h3>Preparations</h3>
        <p>{recipe.preparations}</p>
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
