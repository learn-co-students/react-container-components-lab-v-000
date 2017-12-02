import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

import 'isomorphic-fetch';

const NYT_API_KEY = '26ecb4626a4149b99a280d526b3910eb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {



  render() {
    return (
      <div className="searchable-movie-reviews">
      </div>

    )

  }


}

export default SearchableMovieReviewsContainer;
