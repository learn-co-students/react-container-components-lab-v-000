import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '28f872e13cd54fb8af6272f519915996';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

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
        this.setState({reviews: movieReviews.results});
      });
  }


  render() {
      return (
        <div className="latest-movie-reviews">
        <h1>Latest Reviewsss</h1>
        <MovieReviews reviews={this.state.reviews}/>
        </div>
      );
  }
}
