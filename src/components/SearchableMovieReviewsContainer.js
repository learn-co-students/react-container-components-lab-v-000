import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component{
  constructor(props){
    super(props)
    this.state={
      reviews: [],
      searchTerm:''
    }
  }

  handleChange=(event)=>{
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?')
    .then(response => response.json())
    .then(data => this.setState({reviews: data.results}))

  }

  componentDidMount(){

  }

  render(){
    return(
    <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
        <label>
          Search a Movie:
        <input type='text' onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <MovieReviews reviews={ this.state.reviews } />
    </div>

    )
  }
}

export default SearchableMovieReviewsContainer
