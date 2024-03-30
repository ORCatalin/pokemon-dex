import { useMemo } from 'react';
import useFetchPokemonTypeNames from './useFetchPokemonTypeNames';

const useTypesOptionsLoader = (): {
  options: { value: string; label: string }[];
  loading: boolean;
  error: unknown;
} => {
  const { loading, types, error } = useFetchPokemonTypeNames();


  const options = useMemo(() => {
    if (loading) return [];

    return types.map((type) => ({
      value: type,
      label: type,
    }));
  }, [types, loading]);

  return {
    options,
    loading,
    error,
  };
};

export default useTypesOptionsLoader;
