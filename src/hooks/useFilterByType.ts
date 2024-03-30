import { useMemo } from 'react';
import { Pokemon } from 'pokenode-ts';

type UseFilterByTypeType = {
  pokemons: Pokemon[];
  type: string;
};
const useFilterByType = ({ pokemons, type }: UseFilterByTypeType) => {
  return useMemo(() => {
    if (!type) return pokemons;

    return pokemons.filter(
      (pokemon) => pokemon.types.find(
        (pokemonType) => pokemonType.type.name === type,
      ),
    );
  }, [pokemons, type]);
};

export default useFilterByType;
