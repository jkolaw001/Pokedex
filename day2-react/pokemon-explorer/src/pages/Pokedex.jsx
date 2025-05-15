import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../poke.jsx';
import '../App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon');
      }

      const data = await response.json();
      setPokemon((prevPokemon) => [...prevPokemon, ...data.results]); // Append new Pokémon to the list
      setOffset((prevOffset) => prevOffset + 20); // Increment the offset for the next fetch
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    fetchPokemon();
  };


  const handlePokemonClick = async (url) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon details');
      }

      const data = await response.json();
      setSelectedPokemon(data);
      setModalOpen(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="app-header">
        <button><Link to="/">Home</Link></button>
        <h1>Pokédex</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {error && <div className="error-message">Error: {error}</div>}
      {loading && <div className="loading">Loading...</div>}

      <div className="card-grid">
        {pokemon.map((p, index) => {
          const pokemonId = p.url.split('/')[6];
          return (
            <Link to={`/pokemon/${pokemonId}`} key={index} className="card">
              <div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                  alt={p.name}
                  className="pokemon-image"
                />
                <h3>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</h3>
              </div>
            </Link>
          );
        })}
      </div>

      <button onClick={handleLoadMore} className="load-more" disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );

}

export default Pokedex
