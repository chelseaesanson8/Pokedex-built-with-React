import { useState } from 'react';
import { useEffect } from 'react';

const pageLimit = 20;

export const Pokemons = ({selectedPokemon, setSelectedPokemon}) => {
  const [pokemons, setPokemons] = useState([0]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPokemon = async () => {
      const rawPokemonsResponse = await
        fetch(`https://pokeapi.co/api/v2/pokemon? limit=${pageLimit}&offset=${pageLimit * page}`);

      const pokemonsResponse = await rawPokemonsResponse.json();

      setPokemons(pokemonsResponse.results);
    }

    fetchPokemon();
  }, [page])

  console.log(selectedPokemon);

  return <div>
    <h1>Pokemons</h1>
    {pokemons.map((pokemon) => {
      return <PokemonListItem 
               key={pokemon.name}
               pokemon={pokemon}
               setSelectedPokemon = {setSelectedPokemon}
               />
    })}
    <div>
      <button onClick={() => {setPage(page - 1)}}
        disabled={page === 0}
      >
        Previous
      </button>
      {page}
      <button onClick = {() => {setPage(page + 1)}}>
        Next
      </button>
    </div>
  </div>
}

const PokemonListItem = ({ pokemon, setSelectedPokemon }) => {
  return <div>
    {pokemon.name} <button onClick = {() => { setSelectedPokemon(pokemon.name) }}
    >
      View</button>
  </div>;
}



