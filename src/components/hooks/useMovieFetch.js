import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(false);

  //this function will depend on movieId, otherwise will cause an infinite callback loop
  const fetchData = useCallback(async () => {
      setError(false);
      setLoading(true);
//this is kinda the same as Home component, but our try block is a bit different
//we need two endpoints, one to get the movie, and one to get credits
      try {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        const result = await (await fetch(endpoint)).json();
       
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const creditsResult = await (await fetch(creditsEndpoint)).json();
    
        const directors = creditsResult.crew.filter(
            member => member.job === 'Director'
        );

        setState({
            ...result, 
            actors: creditsResult.cast,
            directors, 
        })

      } catch (error) {
        setError(true);
      }
      setLoading(false);
  }, [movieId])

  useEffect(() => {
      fetchData();
  }, [fetchData])

  return [state, loading, error];
} 