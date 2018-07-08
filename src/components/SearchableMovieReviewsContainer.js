import React from 'react'
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=5b6ab10974ee47bb9592eac5f90138b9&`
            + `query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    console.log(URL + this.state.searchTerm)
    fetch(URL + this.state.searchTerm)
    .then((r) => {
      return r.json()
    }).then((json) => {
      this.setState({ reviews: json.results})
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}


export default SearchableMovieReviewsContainer
