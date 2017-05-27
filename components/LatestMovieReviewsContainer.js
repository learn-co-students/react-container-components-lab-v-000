import React from 'react';
import MovieReviews from './MovieReviews';
import apiKey from '../nytapikey';
const {fetch} = require('whatwg-fetch');

export default class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: [],
    };
    this.url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=' + apiKey;
  }

  componentDidMount(){
    fetch(this.url).then((response) => {
      response.json();
    }).then((json) => {
      this.setState({ reviews: json.results });
    })
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <h2>Latest movie reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
