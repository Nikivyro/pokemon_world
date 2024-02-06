'use client'

import React from 'react';
import PokemonCard from './components/PokemonCard';
import usePokemonList from './hooks/usePokemonList';

export default function Home() {
  const { pokemonList } = usePokemonList();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lista dei primi 20 Pokémon</h1>
      <div className="pokemon-list grid grid-cols-1 sm:grid-cols-3 gap-4">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} image={pokemon.image} gif={pokemon.gif} types={pokemon.types} stats={pokemon.stats}/>
        ))}
      </div>
    </main>
  );
}
