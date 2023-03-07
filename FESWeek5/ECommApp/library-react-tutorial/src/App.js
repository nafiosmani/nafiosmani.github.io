import React from 'react';
import Nav from './components/Nav';
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import { books } from "./data";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
