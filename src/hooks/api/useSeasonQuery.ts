import {useEffect, useState} from 'react';

import axios from 'axios';

import {ISeason} from '@models';

export const useSeasonQuery = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | undefined>(undefined);
  const [data, setData] = useState<ISeason | undefined>(undefined);

  const fetchSeasons = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const response = await axios.get(
        'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc',
      );
      setData(response.data.data);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchSeasons();
  }, []);

  return {
    data,
    isLoading,
    error,
    fetchSeasons,
  };
};
