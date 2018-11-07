import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
const API_KEY = `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  }


  onSubmit = (e) =>{
    e.preventDefault()
    fetch(URL + (this.state.searchTerm ? `${API_KEY}&query=${this.state.searchTerm}` : ""))
    .then(response => response.json())
    .then(json => { this.setState({
      reviews: json.results
      })
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={(e) => this.setState({searchTerm: e.target.value})}/>
          <button type="submit">Search</button>
        </form>

        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

  }

export default SearchableMovieReviewsContainer
