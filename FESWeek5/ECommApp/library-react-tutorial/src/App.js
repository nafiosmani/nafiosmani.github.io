import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Highlights from "./components/Highlights";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Featured from "./components/Featured";
import CheapestBooks from "./components/CheapestBooks";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <CheapestBooks />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
