import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '28f872e13cd54fb8af6272f519915996';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
    }
  }

  componentWillMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then((movieReviews) => {
        this.setState({reviews: movieReviews.results}, ()=>{console.log(this.state.movieReviews)});
      });
  }


  render() {
    if (this.state.reviews && this.state.reviews !== []) {
      return (
        <div className="latest-movie-reviews">
        <h1>Latest Reviewsss</h1>
        <MovieReviews reviews={this.state.reviews}/>
        </div>
      );
    } else {
      return null
    }
  }
}
