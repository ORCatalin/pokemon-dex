import { useContext } from 'react';
import appContext from '../contexts/AppContext';

const useAppContext = () => {
  return useContext(appContext);
}

export default useAppContext;
