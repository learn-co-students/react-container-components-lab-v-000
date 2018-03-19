import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f8b12eabae4d4f8f9d110a432308eeee';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    let reviews = this.fetchReviews();
  }

  fetchReviews() {
    return fetch(URL).then(response=> {
      return response.json()
    }).then(reviews=> {
      this.setState({reviews: reviews.results})
    }).catch(err=> {
      return err;
    });
  }

  render() {
    return (
      <MovieReviews className="latest-movie-reviews" reviews={this.state.reviews} />
    )
  }
}

export default LatestMovieReviewsContainer