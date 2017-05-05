import React from 'react'
import MovieReviews from './MovieReviews'

const {fetch} = require('whatwg-fetch');


const API_KEY = 'f98593a095b44546bf4073744b540da0'
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${API_KEY}`

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({reviews: response.results}))
  }  


  render(){
    return(
      <div className="searchable-movie-reviews" >
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }


}


module.exports = SearchableMovieReviewsContainer;

