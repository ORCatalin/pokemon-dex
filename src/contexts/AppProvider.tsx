import { useState } from 'react';
import appContext from './AppContext';

type AppProviderProps = {
  children: React.ReactNode;
};
const AppProvider = ({ children }: AppProviderProps) => {
  const [filters, setFilters] = useState({
    searchText: '',
    type: '',
  });

  return (
    <appContext.Provider value={{ filters, setFilters }}>
      {children}
    </appContext.Provider>
  );
}

export default AppProvider;
