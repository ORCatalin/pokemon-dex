import { useMemo } from 'react';
import Filters from '../components/Filters';
import useFilters from '../hooks/useFilters';
import useSearchWorker from '../hooks/useSearchWorker';
import useFetchDataForPokemonNames from '../hooks/useFetchDataForPokemonNames';
import PokemonList from '../components/PokemonList';
import useFilterByType from '../hooks/useFilterByType';

const HomePage = () => {
  const { setNameFilter, setTypeFilter, searchText, typeFilter } = useFilters();
  const searchTextFilteredPokemons = useSearchWorker({ searchText });
  const pokemonNames = useMemo(() => searchTextFilteredPokemons.map((pokemon) => pokemon.name), [searchTextFilteredPokemons]);
  const { pokemons, loading } = useFetchDataForPokemonNames({ pokemonNames: pokemonNames });
  const filteredPokemonsByType = useFilterByType({ pokemons, type: typeFilter });

  return (
    <>
      <h1 className="text-4xl mb-6 text-left">Pokedex</h1>
      <div className="flex gap-4 mb-6">
        <Filters
          onNameFilterChange={setNameFilter}
          onTypeFilterChange={setTypeFilter}
        />
      </div>
      <div>
        <PokemonList
          loading={loading}
          pokemons={filteredPokemonsByType}
          count={searchTextFilteredPokemons.length}
        />
      </div>
    </>
  );
};

export default HomePage;
