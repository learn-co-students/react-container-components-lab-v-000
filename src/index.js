import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <div className="row">
      <div className="col" >
        <strong>Latest Reviews</strong>
        <LatestMovieReviewsContainer />
      </div>
      <div className="col" >
        <strong>Seach Reviews</strong>
        <SearchableMovieReviewsContainer />
      </div>
    </div>
  </div>,
  document.getElementById('root')
);