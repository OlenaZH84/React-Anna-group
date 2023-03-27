import { useEffect, useState } from 'react';

export const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  async function cusBigFetch(url) {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(url);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Error happend ${response.status} ${response.statusText}`);
      }
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function cusSmallFetch(url) {
    const response = await fetch(url);

    const data = await response.json();

    setData(data);
  }
  return { data, error, isLoading, cusSmallFetch, cusBigFetch };
};
