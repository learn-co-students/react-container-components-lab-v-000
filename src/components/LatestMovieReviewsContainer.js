import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const KEY = '';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json/?api-key=${KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reviews: []};
  }

  componentWillMount() {
    this.fetchMovieReviews();
  }

  fetchMovieReviews = () => {
    fetch(URL)
      .then(response => {
    		if (response.status >= 400) {
    			throw new Error("Bad response from server");
    		}
        return response.json();
      })
      .then(reviews => {
        this.setState({ reviews: reviews.results })
      });
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}
