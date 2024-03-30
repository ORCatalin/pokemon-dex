type PokemonCharacteristicProps = {
  name: string;
  characteristic?: string | number | null;
}

const PokemonCharacteristic = ({
  name,
  characteristic,
}: PokemonCharacteristicProps) => {
  return (
    <div className="space-y-2 text-left">
      <p><span className="font-bold">{name}:</span> {characteristic}</p>
    </div>
  );
};

export default PokemonCharacteristic;
