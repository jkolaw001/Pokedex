import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../poke.jsx';
import '../App.css';
import { Link } from 'react-router-dom';


function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon details');
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (


    <div className={`pokemon-detail ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="app-header">
        <button><Link to="/">Home</Link></button>
        <h1>Pokédex</h1>
      </header>
      <div className='detail'>
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemon-detail-image"
          />
          <div className="pokemon-stats">
            <p><strong>Height:</strong> {pokemon.height / 10}m</p>
            <p><strong>Weight:</strong> {pokemon.weight / 10}kg</p>
            <p><strong>Types:</strong> {pokemon.types.map(type =>
              type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
            ).join(', ')}</p>
            <p><strong>Abilities:</strong> {pokemon.abilities.map(ability =>
              ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)
            ).join(', ')}</p>
          </div>
      </div>

    </div>
  );
}

export default PokemonDetail;
