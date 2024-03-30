import { useState, useEffect } from 'react';

type UseDebounceType = {
  value: string;
  delay: number;
}

const useDebounce = ({ value, delay }: UseDebounceType) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]);

  return debouncedValue;
};

export default useDebounce;
