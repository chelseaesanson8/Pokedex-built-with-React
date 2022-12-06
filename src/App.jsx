import './App.css';
import { Pokemons } from './Pokemons';
import { useState } from 'react';
import { Pokemon } from './Pokemon';

export default function App() {
    const [selectedPokemon, setSelectedPokemon] = 
  useState(null);

    if (selectedPokemon) {
      return <Pokemon selectedPokemon={selectedPokemon} setSelectedPokemon= 
    {setSelectedPokemon}/>; 
    }
    else{
      return (
        <main>
          <Pokemons selectedPokemon = {selectedPokemon} 
            setSelectedPokemon = {setSelectedPokemon} />
        </main>
      )
      
    }
}