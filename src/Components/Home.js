import video from "../assets/video/cooking.mp4";

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
      </div>
    </main>
  );
};

export default Home;
