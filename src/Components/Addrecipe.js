import Axios from "axios";
import { useEffect, useState } from "react";

const Addrecipe = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberOfIngredients, setNumberOfIngredients] = useState(1);
  const [data, setData] = useState({
    name: "",
    author: "",
    description: "",
    origin: "",
    imageurl:
      "https://image.shutterstock.com/image-photo/thanksgiving-dinner-food-fall-festive-260nw-1815160577.jpg",
    ingredients: [],
    preparations: "",
    instructions: "",
  });
  const [ingredients, setIngredients] = useState([{ id: 1, ingredient: "", amount: "" }]);

  useEffect(() => {
    Axios.get("https://restcountries.com/v2/all")
      .then((result) => {
        setCountries(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Something went wrong! ", err);
        setLoading(false);
      });
  }, []);

  const addIngredient = () => {
    setNumberOfIngredients(numberOfIngredients + 1);
    const newIngredient = { id: ingredients.length + 1, ingredient: "", amount: "" };
    setIngredients([...ingredients, newIngredient]);
  };

  const inputData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const inputIngredientData = (e, i) => {
    const { name, value } = e.target;
    const ingrList = [...ingredients];
    ingrList[i][name] = value;
    setIngredients(ingrList);
    setData({ ...data, ingredients: ingredients });
  };

  const submitRecipe = (e) => {
    Axios.post("http://localhost:3010/recipes", data)
      .then((res) => {
        console.log("Recipe added succesfully", res.status);
      })
      .catch((err) => console.log("Something went wrong with this error: ", err));
  };

  return (
    <div className="main">
      <form className="addrecipe" onSubmit={(e) => submitRecipe(e)}>
        <h1 className="addrecipeheader">Add new recipe:</h1>
        <div className="formsection">
          <label htmlFor="name">Recipe name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={inputData}
            required
            maxLength="80"
          />
        </div>
        <div className="formsection">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={inputData}
            required
            maxLength="80"
          />
        </div>
        <div className="formsection">
          <label htmlFor="origin">Recipe is from:</label>
          <select id="origin" name="origin" onChange={inputData}>
            <option key="default" invalid="true" hidden value="">
              Please select country
            </option>
            {!loading &&
              countries.map((country) => {
                return (
                  <option key={country.alpha3Code} value={country.name}>
                    {country.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="formsection">
          <label htmlFor="image">Image url:</label>
          <input
            type="text"
            id="image"
            name="imageurl"
            onChange={inputData}
            placeholder="Paste image URL, leave empty if you dont want to add a picture"
          ></input>
        </div>
        <div className="formsection">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            onChange={inputData}
            required
            maxLength="200"
          />
        </div>
        <div className="formsection">
          <label htmlFor="preparations">Preparations:</label>
          <textarea name="preparations" id="preparations" onChange={inputData} required />
        </div>

        <div className="formsection">
          <label>Ingredients:</label>

          {Array.from(Array(numberOfIngredients), () => 0).map((_, i) => {
            return (
              <div className="formsection ingredients" key={i}>
                <div className="formsection quantity">
                  <label htmlFor="amount">Quantity:</label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    onChange={(e) => inputIngredientData(e, i)}
                  />
                </div>
                <div className="formsection ingredient">
                  <label htmlFor="ingredient">Ingredient:</label>
                  <input
                    type="text"
                    id="ingredient"
                    name="ingredient"
                    onChange={(e) => inputIngredientData(e, i)}
                  />
                </div>
              </div>
            );
          })}

          <button type="button" className="button" onClick={addIngredient}>
            Add more
          </button>
        </div>
        <div className="formsection">
          <label htmlFor="instructions">Instructions:</label>
          <textarea id="instructions" name="instructions" onChange={inputData} required />
        </div>
        <input type="submit" className="button" value="Submit recipe" />
      </form>
    </div>
  );
};

export default Addrecipe;
