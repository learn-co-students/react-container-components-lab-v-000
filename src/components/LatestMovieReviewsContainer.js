import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'ffdde605d8a4496982d56b813444b3c6';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    };
  };

  componentWillMount() {
    fetch(URL)
    .then(res => res.json())
    .then(response => this.setState({ reviews: response.results }));
  }

  render(){
    return(
      <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
