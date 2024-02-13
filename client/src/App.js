import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Service from "./pages/Service.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Contact from "./pages/Contact Us.js";
import Test from "./pages/Test.js";
// import DarkVariantExample from "./pages/Test.js";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <About />
      <Service />
      {/* <DarkVariantExample/> */}
      <Test />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
