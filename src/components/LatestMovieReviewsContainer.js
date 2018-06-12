import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '289ac6c3f4844407a751768b9d25575f';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({reviews: data.results}))
  }


  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
