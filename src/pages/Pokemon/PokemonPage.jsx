import React from 'react';

import { useState, useEffect } from 'react';
import './style.css'
import { useParams } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Loader from '../../components/Loader/Loader';
import Alert from '../../components/Alert/Alert';

export default function PokemonPage() {
    const {pokemonName} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [errorFetching, setErrorFetching] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
            .then((response) => {
              if (response.ok) {
                setIsLoading(false);
                return response.json();
              }
              setIsLoading(false);
              setErrorFetching(true);
            })
            .then((json) => {
              setPokemon(json);
            });
        }, 500);
      }, [pokemonName]);
    
    return (
        <div className = "PokemonPage">
            { isLoading && <Loader/>}
            { errorFetching && <Alert text={"Error: Impossible to find this Pokémon 😢"}></Alert> }
            { pokemon != null && <PokemonCard pokemon={pokemon}/>}
        </div>
    )
}