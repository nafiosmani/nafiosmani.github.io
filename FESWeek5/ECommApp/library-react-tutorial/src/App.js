import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Highlights from './components/Highlights';
import Nav from './components/Nav';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
    </div>
  );
}

export default App;
