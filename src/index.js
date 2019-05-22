import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <div className="app">
    <ErrorBoundary>
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
    </ErrorBoundary>
  </div>,
  document.getElementById('root')
);