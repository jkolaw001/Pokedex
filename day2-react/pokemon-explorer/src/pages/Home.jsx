import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../poke.jsx';

const Home = () => {
  const { darkMode } = useContext(ThemeContext); // Access darkMode from ThemeContext

  return (
    <div className={`Home ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="app-header">
        <h1>Welcome to the Pokémon Explorer</h1>
      </header>
      <p>Click on the Pokédex to explore Pokémon!</p>
      <Link className="home" to="/pokedex">View Pokédex</Link>
    </div>
  );
};

export default Home;
