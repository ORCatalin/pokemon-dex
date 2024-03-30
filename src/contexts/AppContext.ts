import { createContext } from 'react';

type AppContextType = {
  filters: {
    searchText: string;
    type: string;
  },
  setFilters: (filters: { searchText: string; type: string }) => void;
}

export const appContext = createContext<AppContextType>({
  filters: {
    searchText: '',
    type: '',
  },
  setFilters: () => {},
});

export default appContext;
