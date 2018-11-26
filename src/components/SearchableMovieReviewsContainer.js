import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  fetchReviews = (serchTerm = "cats") => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(({data}) => this.setState({ reviews: data.results }))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchReviews(this.state.searchTerm)
  }



  render() {
    return (
       <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.searchTerm} 
            onChange={event => this.setState({searchTerm: event.target.value})} />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }

}


export default SearchableMovieReviewsContainer;