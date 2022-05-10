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
          <a href="https://www.bc.fi" target="_blank" rel="noreferrer" className="link">
            Business College Helsinki
          </a>
        </p>
      </div>
      <div className="content">
        <h4>Looking for recipes?</h4>
        <div className="boxcontainer">
          <Box boxheader="Test box">This is a test box</Box>
          <Box boxheader="Another box">This is another test box</Box>
        </div>
      </div>
    </main>
  );
};

export default Home;
