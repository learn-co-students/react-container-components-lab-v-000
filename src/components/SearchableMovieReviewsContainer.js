import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js';

let term = 'bother';
const NYT_API_KEY = '1e07c799184843eb8e3fdef3a62f4036';
let url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
url += ({
  'api-key': NYT_API_KEY,
  'query': term,
})
  // + `api-key=${NYT_API_KEY}`;


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
    fetch(url).then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        reviews: data.results,
      })
    })
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


