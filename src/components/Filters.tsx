import { ChangeEvent } from 'react';
import SkeletonLoader from './SkeletonLoader';
import useTypesOptionsLoader from '../hooks/useTypesOptionsLoader';
import useAppContext from '../hooks/useAppContext';

type FiltersProps = {
  onNameFilterChange: (name: string) => void;
  onTypeFilterChange: (type: string) => void;
};

const Filters = (props: FiltersProps) => {
  const { filters } = useAppContext();
  const { loading, options } = useTypesOptionsLoader();

  const handleNameFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onNameFilterChange(event.target.value);
  };

  const handleTypeFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onTypeFilterChange(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Filter by name"
        className="flex-1 p-2 bg-gray-700"
        onChange={handleNameFilterChange}
        value={filters.searchText}
      />
      {loading && <SkeletonLoader height={40}/>}
      {!loading && (
        <select
          className="flex-1 p-2 bg-gray-700"
          onChange={handleTypeFilterChange}
          value={filters.type}
        >
          <option value="">Filter by type</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      )}
    </>
  );
};

export default Filters;
