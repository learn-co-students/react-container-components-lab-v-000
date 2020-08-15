// The two container components you've been asked to create will use this 
    // single presentational component in different ways. 

// The first, <LatestMovieReviewsContainer>, 
  // will fetch a list of the most recent reviews and display them. 

// The second, <SearchableMovieReviewsContainer>, 
    // will provide a searchable interface allowing the user to enter a search term and then receive a 
        // list of reviews that match the search term(s).


import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);