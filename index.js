import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from
  './components/LatestMovieReviewsContainer'
;
import SearchableMovieReviewsContainer from
  './components/SearchableMovieReviewsContainer'
;

ReactDOM.render(
  <div className="app">
    <h1>Movie Reviews!</h1>
    <LatestMovieReviewsContainer />
    <SearchableMovieReviewsContainer />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
