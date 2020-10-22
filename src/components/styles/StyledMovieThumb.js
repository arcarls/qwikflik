import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    transition: 0.4s;
    object-fit: cover;
    border-radius: 15px;


    :hover {
      filter: drop-shadow(15px 5px 4px #FFC300);
      cursor: pointer;
     
    }
  }
`;
