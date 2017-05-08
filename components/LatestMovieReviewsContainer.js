import React from 'react';
import MovieReviews from './MovieReviews';
const {fetch} = require('whatwg-fetch');

const NYT_API_KEY = '972307970e8d48edbaf69de1cb61872c'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`


export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({reviews: json.results}))
  }

  render() {
    return(
      <div className='latest-movie-reviews'>
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
