import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2405247074ca487e8ea14bcc8e74e010';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {
    fetch(URL).then(function(data){
      return data.json();
    }).then(function(json){
      this.setState({
        reviews: json.results,
      }, () => console.log(this.state.reviews))
    }.bind(this))

  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
