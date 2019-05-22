import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js';

let term = 'bother';
const NYT_API_KEY = 'sAwXo8b1qHL8ZeLqUA9N8mSkv3ffGKip';
let url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
url += ({
  'api-key': NYT_API_KEY,
  'query': term,
})

export default class SearchableMovieReviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: '',
    }
  }

  componentDidMount() {
    console.log(url)
    fetch(url).then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(stories) {
		console.log(stories);
	});
}

  render() {
    return (
      <div className={'searchable-movie-reviews'}>
        <h1>Search</h1>
        <MovieReviews reviews={this.state.reviews} searchTerm={this.state.searchTerm}/>
      </div>
    )
  }
}
