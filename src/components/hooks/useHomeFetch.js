import { useState, useEffect } from 'react';
import { POPULAR_BASE_URL } from '../../config';


export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);  

  // console.log(state);

  //this async will allow the code to wait until it pulls data from the api before continuing
  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');

    //this try block executes first, awaits data from the endpoint, awaits the .json parse, then continues
    //the catch block will run if the try doesn't work
    try {
      const result = await (await fetch(endpoint)).json();
     
      //this 'spread previous state should give you the value of the previous state as the parameter
      setState(prev => ({
          ...prev,
          movies: 
            isLoadMore !== -1 
            ? [...prev.movies,   ...result.results]
            : [...result.results],
          HeroImage: prev.HeroImage || result.results[0], //this '||' short circuit will check if we have HeroImage in state, and if so, it does nothing.index 0 is the most popular movie
          currentPage: result.page,
          totalPages: result.total_pages,    //the naming convention for total_pages come straight from TMDB API,          
      }));

    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
}
// useEffect is native to React hooks, this is our trigger for fetching data from the API
  useEffect(() => {
      fetchMovies(POPULAR_BASE_URL);
  }, [])
//  ˆˆˆˆ empty dependency array keeps this from running ad nausea

  return [{ state, loading, error }, fetchMovies];
}

