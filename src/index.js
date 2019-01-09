import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

require('dotenv').config({ path: '../.env' });
require('es6-promise').polyfill();
require('isomorphic-fetch');

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);
