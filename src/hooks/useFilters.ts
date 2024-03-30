import useDebounce from './useDebounce';
import useAppContext from './useAppContext';

const useFilters = () => {
  const { filters, setFilters } = useAppContext();

  const setNameFilter = (name: string) => {
    setFilters({ ...filters, searchText: name });
  };

  const setTypeFilter = (type: string) => {
    setFilters({ ...filters, type });
  };

  const debouncedSearchTerm = useDebounce({
    value: filters.searchText,
    delay: 500,
  });

  return {
    nameFilter: filters.searchText,
    typeFilter: filters.type,
    setNameFilter,
    setTypeFilter,
    searchText: debouncedSearchTerm,
  };
};

export default useFilters;
