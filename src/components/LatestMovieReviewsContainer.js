import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    // this.interval = setInterval(this.fetchData, 15000);
    // add event listeners, ajax requests, or timeouts here
    fetch(URL)
      .then((res)=>res.json())
      .then(({results})=> {
        this.setState({reviews: results})
      })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
      
    );
  }
}

export default LatestMovieReviewsContainer;
