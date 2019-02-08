import React from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AoOucKUt3jpmSGw7FgqzD6nHaJ0oCDbz'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
 
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json()
      })
      .then(data => this.setState({ reviews: data.results }))
 
  }
 
  render() {
    return(
      <div className="latest-movie-reviews">
        <h3>Latest Movie Reviews</h3>
        <MovieReviews reviews={this.state.reviews}/>
      </div>  
    )
  }
}

export default LatestMovieReviewsContainer

