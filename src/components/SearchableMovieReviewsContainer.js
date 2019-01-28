import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=OeHIaCV61NAG70WTTbqpJcYO5QI8gSJM`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{
  constructor(props){
    super(props)
    this.state={
      reviews: [],
      searchTerm: ""
    }
  }

getReviews = (e)=>{

  let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?${this.state.searchTerm}`
  + `api-key=OeHIaCV61NAG70WTTbqpJcYO5QI8gSJM`
  fetch(url).then(resp=>{
    return resp.json()
  }).then(data=>{
    this.setState({
      reviews: data.results

    })
  })
  console.log(this.state.data)
}

handleChange=(e)=>{
  this.setState({
    searchTerm: e.target.value
  })
}




  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.getReviews}>
          Search Review<br/>
        <input type='text' value={this.state.searchTerm} onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
        <h1>Searched Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
        {console.log(this.state.searchTerm)}
        {console.log(this.state.reviews)}
      </div>
    )
  }
}
