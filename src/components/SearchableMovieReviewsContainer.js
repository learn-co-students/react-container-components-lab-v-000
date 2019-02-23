import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'GwlxdkawvQ1hnx8QzrrANhgvXzU4U3KG';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
  state = {reviews:[], searchTerm:''}

  submit = (event) =>{
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(json =>this.setState({reviews: json.results}))
  }

  inputChange = (e) => {
    e.preventDefault()
    this.setState({searchTerm: e.target.value})
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <form  onSubmit={this.submit}>
          <input type='text' onChange={this.inputChange}/>
          <button type='submit'>Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>

      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
