import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = '5eb83e79a1a44ba0adf77fb775683676';
var searchTerm = "tom"
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + `${searchTerm}&api-key=${NYT_API_KEY}`


export default class SearchableMovieReviewsContainer extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    reviews: [],
    searchTerm: ""
  }
}

componentWillUpdate() {
  fetch(URL)
  .then((response) => response.json())

  .then((response) => {
  console.log(response)
}
  )
}

  render() {
    return <div className='searchable-movie-reviews' >
      <MovieReviews reviews={this.state.reviews} />
    </div>
  }
}
