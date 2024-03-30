import { Pokemon } from 'pokenode-ts';
import { useNavigate } from 'react-router-dom';

type PokemonListItemProps = {
  pokemon: Pokemon;
}

const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${pokemon.id}`, {
      state: { pokemon },
    });
  };

  return (
    <div
      className="flex items-center bg-gray-700 mb-4 p-4 rounded cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={pokemon.sprites.front_default || ''}
        alt={pokemon.name}
        className="w-20 h-20 mr-4"
      />
      <div>
        <h2 className="text-2xl">{pokemon.name}</h2>
      </div>
    </div>
  );
};

export default PokemonListItem;
