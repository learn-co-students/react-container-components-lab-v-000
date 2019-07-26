import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// require('es6-promise').polyfill();
// require('isomorphic-fetch')

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = '51OGJcsvTYl5xizG'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
    
        this.state = {
          reviews: []
        };
      }

      componentDidMount(){
          fetch(URL)
          .then(res => res.json())
          .then(movies => this.setState({reviews: movies.results}))
      }

      render(){
          return (
              <div className="latest-movie-reviews">
              <h2>The Latest Reviews:</h2>
              <MovieReviews reviews={this.state.reviews} />
              </div>
          )
      }
}
