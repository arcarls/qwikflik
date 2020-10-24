import React, { useState } from 'react';
import { 
POPULAR_BASE_URL,  
POSTER_SIZE,
BACKDROP_SIZE,
IMAGE_BASE_URL,
SEARCH_BASE_URL
} from '../config';


import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner';

//Custom hook
import { useHomeFetch } from './hooks/useHomeFetch';

//this is our fall back for when no image is provided by the API
import NoImage from './images/no_image.jpg';



//When trying to de-structure state below, everything blows up...
const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');
  //this empty string for useState is going to be used to check if we are in a search or not
 console.log(state);

 const searchMovies = search => {
  const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
  
  setSearchTerm(search);
  fetchMovies(endpoint);
  
}  

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage +1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`;
    
    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
    
    fetchMovies(endpoint)
  }

  if (error) return <div>What did you do???</div>;
  if (!state.movies[0]) return <Spinner />;

return (
    <>
    <HeroImage 
      image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.HeroImage.backdrop_path}`}
      title={state.HeroImage.original_title}
      text={state.HeroImage.overview}
  
      />
    <SearchBar callback={searchMovies} />
    <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
     {state.movies.map(movie => (
       <MovieThumb
       key={movie.id} 
       clickable
       image={
         movie.poster_path 
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
          : NoImage //Image movie poster_path structure provided by The Movie Database API, DON'T MESS WITH IT!
      }
        movieId={movie.id}
        movieName={movie.original_title}
        >
          
        </MovieThumb>
     ))}
    </Grid> 
    {loading && <Spinner />}
    <LoadMoreBtn callback={loadMoreMovies} text= "Load More" />
    </>
    ) 
  }
// the above {loading && <Spinner />} is a short circuit that says if loading is true, load our spinner component 


export default Home;