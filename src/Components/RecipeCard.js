import { useState, useEffect } from "react";
import axios from "axios";

const RecipeCard = ({ name, description, imageurl, origin }) => {
  const [flag, setFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/225px-No_flag.svg.png?20220314051100"
  );

  const axios = require("axios").default;
  // setFlag(res.data[0].flags.svg)  console.log(res.data[0].flags.svg))

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/" + origin)
      .then((res) => setFlag(res.data[0].flags.svg));
  }, []);

  return (
    <div className="card">
      <img className="cardflag" src={flag} alt="Flag" />
      <img src={imageurl} alt={name} className="cardimage" />
      <div className="cardcontent">
        <h4>{name}</h4>
        <p>{description}</p>
        <button className="readmore">Read more</button>
      </div>
    </div>
  );
};

export default RecipeCard;
