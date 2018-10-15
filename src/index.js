import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import App from './components/App.js';

ReactDOM.render(
  <div className="app">
    <App />
  </div>,
  document.getElementById('root')
);

//
// <SearchableMovieReviewsContainer />
// <LatestMovieReviewsContainer />
