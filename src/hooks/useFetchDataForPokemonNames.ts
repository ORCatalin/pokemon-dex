import { useEffect, useMemo, useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import { toast} from 'react-toastify';
import pokemonsApiClient from '../config/pokemonsClient';

type FetchPokemonsDataType = {
  pokemonNames: string[];
}

const useFetchDataForPokemonNames = ({ pokemonNames }: FetchPokemonsDataType) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [lastKey, setLastKey] = useState<string | null>(null);
  const key = useMemo(() => {
    return pokemonNames.join('-');
  }, [pokemonNames]);

  useEffect(() => {
    if (lastKey === key || loading) {
      return;
    }

    const fetchPokemonsByName = async () => {
      try {
        setLoading(true);
        setLastKey(key);
        const result = await Promise.all(
          pokemonNames.map((pokemonName) => pokemonsApiClient.getPokemonByName(pokemonName)),
        );

        setPokemons(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        toast.error('Failed to fetch pokemons names');
      }
    };

    fetchPokemonsByName();
  }, [pokemonNames, key, lastKey, loading]);

  return {
    pokemons,
    loading,
    error,
  };
};

export default useFetchDataForPokemonNames;
