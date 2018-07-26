import React, {Component} from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a8916fba7c494a59bd7d2ad21df3cb33';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(response => response.json())
    .then(reviews => this.setState({
      reviews: reviews.results
    }))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <h2>Latest Movies Reviews:</h2>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
