import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'beb66ef8ee5a4e7581867164459e56e5';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {

constructor () {
  super();
  this.state = {
    reviews: []
  }
}

componentDidMount() {
  fetch(URL).then(res=> res.json())
  .then((resp=> this.setState({
    reviews: resp.results})))
}


render() {
  return (
    <div className="latest-movie-reviews">
       <h2>Latest Reviews </h2>
       < MovieReviews reviews={this.state.reviews}/>
    </div>
  )
}

}




export default LatestMovieReviewsContainer;
