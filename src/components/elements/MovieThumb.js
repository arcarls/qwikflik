import React from 'react';
import { StyledMovieThumb } from '../styles/StyledMovieThumb'
import { Link } from '@reach/router';

const MovieThumb = ({ image, movieId, clickable }) => ( 
  <StyledMovieThumb> 
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className="clickable" src={image} alt="moviethumb" />
        </Link>
      ) : (
          <img src={image} alot="moviethumb" />  
      )}
  </StyledMovieThumb>
//if 'clickable is true, run this

)

export default MovieThumb;