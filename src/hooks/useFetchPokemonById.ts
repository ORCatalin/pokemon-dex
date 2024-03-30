import { useEffect, useState } from 'react';
import pokemonsApiClient from '../config/pokemonsClient';
import { Pokemon } from 'pokenode-ts';

type UseFetchPokemonByIdType = {
  defaultValue?: Pokemon | null;
  pokemonId?: string;
}
const useFetchPokemonById = ({ pokemonId, defaultValue }: UseFetchPokemonByIdType) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultValue) {
      setPokemon(defaultValue);
      setLoading(false);
      return;
    }

    if (!pokemonId === undefined || pokemonId === null) {
      return;
    }

    const fetchPokemonById = async () => {
      try {
        setLoading(true);
        const data = await pokemonsApiClient.getPokemonById(Number(pokemonId));
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch pokemon by id');
        setLoading(false);
      }
    };

    fetchPokemonById();
  }, [defaultValue, pokemonId]);

  return { pokemon, loading, error };
};

export default useFetchPokemonById;
