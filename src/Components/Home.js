import { NavLink } from "react-router-dom";
import video from "../assets/video/cooking.mp4";
import Box from "./Box";

const Home = () => {
  return (
    <main className="main">
      <video loop autoPlay muted src={video} className="video" />
      <div className="tasteitHeader">
        <h1 className="tasteit">TasteIt</h1>
        <p className="description">
          TasteIt recipe app made with React at{" "}
          <a
            href="https://www.bc.fi"
            target="_blank"
            rel="noreferrer"
            className="linkactive hover"
          >
            Business College Helsinki
          </a>
        </p>
      </div>
      <div className="content">
        <h4>Looking for recipes?</h4>
        <div className="boxcontainer">
          <Box boxheader="Browse recipes">
            Are you looking for recipes? Take a look at our list of recipes in "
            <NavLink to="/recipes" className="boxlink">
              Recipes
            </NavLink>
            " section.
          </Box>
          <Box boxheader="Adding recipe">
            Do you want to make your own recipe to our database? We'd love to see your
            recipe there so take your time and add your recipe{" "}
            <NavLink to="/recipes" className="boxlink">
              here!
            </NavLink>
          </Box>
          <Box boxheader="Want to know more?">
            Do you want to know more about the program? Head over to Business College
            Helsinki website to our program from{" "}
            <a
              href="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
              target="_blank"
              rel="noreferrer"
              className="boxlink"
            >
              here.
            </a>
          </Box>
        </div>
      </div>
    </main>
  );
};

export default Home;
