import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Dg1S4RlATVx2SdFWBEiOQH9gbtb7gKk4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


  export default class LatestMovieReviewsContainer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        reviews: []
      }
    }

    retrieveReviews = () => {
      fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=Dg1S4RlATVx2SdFWBEiOQH9gbtb7gKk4`)
        .then(response => response.json())
          .then(data =>
            this.setState({ reviews: data.results })
          );
    }

    componentDidMount() {
      this.retrieveReviews()
    }

    render() {
      return(
        <div className="latest-movie-reviews">
          <h2>The Latest Reviews:</h2>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      );
    }
  }
