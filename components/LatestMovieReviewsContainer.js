import React from 'react';
import MovieReviews from  './MovieReviews';
const {fetch} = require('whatwg-fetch')

export default class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }
  componentWillMount() {
    const apiKey = '55285c0c95aa4533adb48b6f7bde67ca'
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=55285c0c95aa4533adb48b6f7bde67ca')
      .then(res => res.json())
      .then(reviews => this.setState({reviews: reviews.results}));
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
