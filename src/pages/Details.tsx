import { useNavigate, useLocation, useParams } from 'react-router-dom';
import useFetchPokemonById from '../hooks/useFetchPokemonById';
import PokemonCharacteristic from '../components/PokemonCharacteristic';

const DetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pokemon: defaultValue } = location.state;
  const { pokemonId } = useParams();
  const { pokemon } = useFetchPokemonById({ pokemonId, defaultValue });
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex mb-4 items-center">
        <button
          onClick={handleGoBack}
          type="button"
          className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-500 transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto mr-4"
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>Go back</span>
        </button>
        <h1 className="text-4xl text-left">{pokemon?.name}</h1>
      </div>
      <div className="relative bg-gray-700 rounded-lg shadow-lg p-6">
        <div className="flex items-center p-4">
          <div className="flex-1">
            <PokemonCharacteristic
              name="Height"
              characteristic={pokemon?.height}
            />
            <PokemonCharacteristic
              name="Weight"
              characteristic={pokemon?.weight}
            />
            <PokemonCharacteristic
              name="Moves"
              characteristic={pokemon?.moves.map(m => m.move.name).join(',')}
            />
            <PokemonCharacteristic
              name="Abilities"
              characteristic={pokemon?.abilities.map(a => a.ability.name).join(',')}
            />
          </div>
          <div className="w-32 h-32 rounded-full bg-gray-300 mb-4">
            <img
              src={pokemon?.sprites.front_default || ''}
              alt={pokemon?.name}
              className="w-40 h-40"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
