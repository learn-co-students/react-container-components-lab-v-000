import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`
class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: "",
    reviews: []
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL+this.state.searchTerm)
    .then(response => response.json())
    .then(data => this.setState({reviews: data['results']}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form value={this.state.searchTerm} onSubmit={this.handleSubmit} >
        <input type="text" onChange={event => this.setState({searchTerm: event.target.value})}/>
        <input type="submit" value="Submit"/>
        </form>
        < MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer
