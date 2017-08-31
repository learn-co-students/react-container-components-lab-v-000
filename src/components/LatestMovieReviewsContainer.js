import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '63f9c23196db472c9a65917707d19670';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

    componentWillMount = () => {
      fetch(URL)
        .then(res => res.json())
        .then(resp => this.setState({ reviews: resp.results  }))
    }

    render() {
      return (
        <div className="latest-movie-reviews">Latest Movie Reviews<MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
  }

export default LatestMovieReviewsContainer;
