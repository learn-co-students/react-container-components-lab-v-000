import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cafee19336e44057b228bce35e81087e';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`

class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          reviews: json.results
        });
      });
  }

  renderMovieReviews = () => {
    return this.state.reviews.map(movie => {
      return <MovieReviews key={movie.display_title} review={movie} />
    });
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
