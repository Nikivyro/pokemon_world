'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';

const usePokemonList = () => {
  // Stato per la lista dei pokemon
  const [pokemonList, setPokemonList] = useState([]);

  // Effetto per caricare la lista dei pokemon
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        // Richiesta API per la lista dei pokemon
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');

        // Ottieni i dati di ogni pokemon
        const pokemonData = await Promise.all(response.data.results.map(async (pokemon) => {
          // Richiesta API per i dettagli del pokemon
          const detailResponse = await axios.get(pokemon.url);
          const detailData = detailResponse.data;

          // Ritorna un oggetto con nome e immagine
          return {
            name: detailData.name,
            image: detailData.sprites.front_default,
            gif: detailData.sprites.other.showdown.front_default,
            stats: detailData.stats,
            types: detailData.types
          };
        }));

        // Aggiorna lo stato con la lista dei pokemon
        setPokemonList(pokemonData);
      } catch (error) {
        // Gestisci l'errore
        console.error('Errore nella chiamata API:', error);
        setPokemonList([]);
      }
    };

    // Esegui la funzione fetchPokemonList
    fetchPokemonList();
  }, []);

  // Restituisce la lista dei pokemon
  return { pokemonList };
};

export default usePokemonList;
