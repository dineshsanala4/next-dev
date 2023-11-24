"use client";

/*import "./styles/globals.css";
import Layout from "./components/layout/Layout";

const Home = () => {
  return (
    <>
      <Layout />
    </>
  );
};

export default Home;
*/
//import "./styles/globals.css";
//import variables from "./variables.module.scss";
/*import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Projects from "./Projects/Projects";

import Blog from "./components/Blog/Blog";
import Home from "./pages/home/Home";
import Blogs from "./pages/Blogs/Blogs";
//import Home from "./home/Home";
//import Home from "./home/Home";
import Details from "./pages/Blogs/Details/Details";
//import Layout from "./components/layout/Layout";
import Projects from "./pages/Projects/Projects";
const App = () => {
  return (
    <>
      <Home />

      <BrowserRouter>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

//import { BrowserRouter, Route, Routes } from "react-router-dom";
/*import "./App.scss";
//import Blogs from "./pages/Blogs/Blogs";
//import Details from "./pages/Blogs/Details/Details";
import Home from "../app/home/Home";
//import Projects from "./pages/Projects/Projects";
//import Layout from "./components/layout/Layout";
//import Layout from "./components/layout/Layout";

function App() {
  return (
  
  );
}

export default App;
*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import "../app/Variables.module.scss";

import "./globals.css";
import Blogs from "./Pages/Blogs/Blogs";
import Details from "./Pages/Blogs/Details/Details";
import Home from "./components/home/Home";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Details />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
