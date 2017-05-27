import React from 'react';
import MovieReviews from './MovieReviews';
import apiKey from '../nytapikey';
const {fetch} = require('whatwg-fetch');

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: [],
      query: ''
    };
    this.url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='+ this.state.query + 'api-key=' + apiKey;
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
      <div className="searchable-movie-reviews">
        <h2>Search movie reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
