import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Recipes from "./Components/Recipes";
import Addrecipe from "./Components/Addrecipe";
import Home from "./Components/Home";
import Layout from "./Pages/Layout";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="addrecipe" element={<Addrecipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
