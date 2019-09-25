import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <h2>Searchable</h2>
    <SearchableMovieReviewsContainer />
    <h2>Latest</h2>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);
