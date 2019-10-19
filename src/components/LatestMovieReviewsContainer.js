import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'mwYGSgztmKiAGVXPuh3ynNL5HXA6vf09';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  // handleSubmit = () => {
  //   fetch(URL)
  //     .then(function(response) {
  //       if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //         }
  //       return response.json();
  //     })
  //     .then(function(reviews) {
  //       reviewsArray = reviews.results
  //     })
  //
  //     this.setState(
  //       { reviews: reviewsArray }
  //     )
  // }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }


  render() {
    return (
      <div className="latest-movie-reviews">
         <h2>Latest Movie Reviews:</h2>
         <MovieReviews reviews={this.state.reviews} />
      </div>
    )

  }

}
