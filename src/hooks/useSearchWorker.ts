import { useEffect, useState } from 'react';
import axios from '../config/axios';
import { ALL_POKEMONS_STORAGE_KEY } from '../utils/constants';
import { SearchedPokemon } from '../utils/types';

type UseSearchWorkerType = {
  searchText: string;
}
const useSearchWorker = ({ searchText }: UseSearchWorkerType) => {
  const [result, setResult] = useState<SearchedPokemon[]>([]);

  useEffect(() => {
    const worker = new Worker(
      new URL('../workers/searchWorker.js', import.meta.url),
    );
    const doSearch = async () => {
      const cachedData = await axios.storage.get(ALL_POKEMONS_STORAGE_KEY);
      const data  = cachedData?.data?.data as { results: SearchedPokemon[] };

      worker.postMessage({ data: data?.results || [], searchText });

      worker.onmessage = (e) => {
        setResult(e.data.result);
      };
    };

    doSearch();

    return () => worker.terminate();
  }, [searchText]);

  return result;
};

export default useSearchWorker;
