import { useEffect } from 'react';
import { BaseURL, ENDPOINTS } from 'pokenode-ts';
import axios from '../config/axios';
import { ALL_POKEMONS_STORAGE_KEY } from '../utils/constants';
import { toast } from 'react-toastify';

const useLoadAndCacheAllPokemons = () => {
  useEffect(() => {
    const loadAndCachePokemons = async () => {
      try {
        const res = await axios.get(`${BaseURL.REST}${ENDPOINTS.POKEMON}`, {
          cache: false,
        });
        const count = res.data.count;
        await axios.get(`${BaseURL.REST}${ENDPOINTS.POKEMON}/?offset=0&limit=${count}`, {
          id: ALL_POKEMONS_STORAGE_KEY,
        });
      } catch (error) {
        toast.error('Failed to fetch and cache all pokemons');
      }
    }
    loadAndCachePokemons();
  }, []);
}

export default useLoadAndCacheAllPokemons;
