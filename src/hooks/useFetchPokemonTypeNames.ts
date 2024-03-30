import { useEffect, useState } from 'react';
import pokemonsApiClient from '../config/pokemonsClient';
import { toast } from 'react-toastify';

const useFetchPokemonTypeNames = (): {
  types: string[];
  loading: boolean;
  error: unknown;
} => {
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        setLoading(true);
        const data = await pokemonsApiClient.listTypes();
        setTypes(data.results.map((type) => type.name));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        toast.error('Failed to fetch pokemon type names');
      }
    };

    fetchTypes();
  }, []);

  return {
    types,
    loading,
    error,
  };
};

export default useFetchPokemonTypeNames;
