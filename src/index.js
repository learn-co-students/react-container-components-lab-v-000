import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <div>
      <SearchableMovieReviewsContainer />
    </div>  
    <div>
      <LatestMovieReviewsContainer />
    </div>  
  </div>,
  document.getElementById('root')
);