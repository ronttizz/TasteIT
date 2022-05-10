const RecipeCard = ({ name, description, imageurl, flag }) => {
  console.log(flag);
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
