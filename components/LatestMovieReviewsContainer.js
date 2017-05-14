import React from 'react'
import MovieReviews from './MovieReviews'
const {fetch} = require('whatwg-fetch')

const NYT_API_KEY = 'e8f854ce1f02467f85f1eec3c277ba96'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`

export default class LastestMovieReview extends React.Component {
  constructor() {
    super()

    this.state ={
      reviews: []
    };
  }

  componentWillMount(){
    fetch(URL)
    .then(res =>res.json())
    .then(json => this.setState({reviews: json.results}))
  }

  render(){
    return (
      <div className='latest-movie-reviews'>
      <h2>The Latest Reviews:</h2>
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
