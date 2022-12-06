import { useEffect, useState } from "react"; 

export const Pokemon = ({ selectedPokemon, setSelectedPokemon }) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      const rawPokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    )

    const pokemonResponse = await rawPokemonResponse.json(); 

    setPokemon(pokemonResponse); 
    }

    fetchPokemon();
  }, [selectedPokemon])

  if(!pokemon) {
    return "Loading..."
  }
  
  return <div>
    <h1>{pokemon.name}</h1>
    <img src = {pokemon.sprites.front_default} />
    <button onClick = {() => {setSelectedPokemon(null) }}>Back</button>
  
  </div>; 
  
}