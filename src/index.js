import React from 'react';
import ReactDOM from 'react-dom';
import testReviews from './test-reviews';
import MovieReviews from './components/MovieReviews.js';	

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <MovieReviews reviews={testReviews} />
  </div>,
  document.getElementById('root')
);