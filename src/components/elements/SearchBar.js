import React, { useState, useRef } from 'react';
import FontAwesome from 'react-fontawesome';

import {StyledSearchBar, StyledSearchBarContent}
from '../styles/StyledSearchBar';

const SearchBar = ({ callback }) => {
    const [state, setState] = useState('');
    const timeOut = useRef(null);

    //this is going to be a CONTROLLED COMPONENT
//state (determined by user) {doSearch} will update the state
//the input field will then get its value from the state
//state value and input value will always be in sync
     const doSearch = event => {
         const { value } = event.target;
         setState(value);

         //if you have a value you want to mutate and you want to keep between renders you use a ref
        clearTimeout(timeOut.current);
        setState(value);

        timeOut.current =setTimeout(() =>{
        callback(value);
        }, 500); 
    }
        //when the user types in the search bar, it will wait .5s before it calls the API


return (
    <StyledSearchBar>
        <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={doSearch}
          value={state}
          />
    </StyledSearchBarContent>
    </StyledSearchBar>
)
}

export default SearchBar;