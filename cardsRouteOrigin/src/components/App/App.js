import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";
import "../Word/Word.jsx";
import Footer from "../Footer/Footer";
import logo from "../../assets/photo/logoBoy.jpeg";
import Home from "..//../pages/Home/Home";
import WordsList from "..//..//pages/WordsList/WordsList";
import CardsGame from "..//..//pages/CardsGame/CardsGame";
import WordsGame from "..//..//pages/WordsGame/WordsGame";
import Error from "..//..//pages/Error/Error";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="slogan">Learn by Playing</h1>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/wordslist">
          Words List
        </NavLink>
        <NavLink className="link" to="/wordsgame">
          Words Game
        </NavLink>
        <NavLink className="link" to="/cardsgame">
          Cards Game
        </NavLink>
        <Link to="/logo">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wordslist" element={<WordsList />} />
        <Route path="/wordsgame" element={<WordsGame />} />
        <Route path="/cardsgame" element={<CardsGame />} />
        <Route path="/logo" element={<Navigate to="/wordslist" />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
