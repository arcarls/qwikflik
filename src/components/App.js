import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';
import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';


const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: #A2B996;
  }
`
const App = () => (
  <>
    <Header />
 
    <Router>
      <Home path= "/" />
      <Movie path= "/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
)

export default App;
