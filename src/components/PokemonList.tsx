import { Pokemon } from 'pokenode-ts';
import PokemonListItem from './PokemonListItem';
import SkeletonLoader from './SkeletonLoader';

type ListSkeletonProps = {
  skeletonNo: number;
}
const ListSkeleton = ({ skeletonNo }: ListSkeletonProps) => {
  return Array.from(new Array(skeletonNo)).map((_, index) => (
    <SkeletonLoader key={index} className="rounded mb-4" height={112}/>
  ));
};

type PokemonListProps = {
  pokemons: Pokemon[];
  loading: boolean;
  count: number;
}

const PokemonList = ({ loading, pokemons, count }: PokemonListProps) => {
  return (
    <div>
      {loading && <ListSkeleton skeletonNo={count}/>}
      {!loading && pokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
  );
};

export default PokemonList;
