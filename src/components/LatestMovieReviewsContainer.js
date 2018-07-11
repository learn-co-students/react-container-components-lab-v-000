import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js';

const NYT_API_KEY = '1e07c799184843eb8e3fdef3a62f4036';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
  + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviews extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
    }
  }

  // componentDidMount() {
  //   fetch(URL).then(results => {
  //     return results.json();
  //   }).then(data => {
  //     this.setState({
  //       reviews: data.results,
  //     })
  //   })

  // }


  render() {
    return (
      <div className={'latest-movie-reviews'}>
        <h1>List</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}


