import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2Bpa9q2ymJnYiNcs41xr8Ph5AGG0kGYn';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?&query=';


// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
 constructor() {
   super()

   this.state = {
     reviews: [],
     searchTerm: ""
   };
 }

 handleChange = event => {
   this.setState({
   searchTerm : event.target.value
 })
}

handleSubmit = event => {
event.preventDefault()
  fetch(`${URL}${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({ reviews: data.results }))
}

render() {
 return (
   <div className ="searchable-movie-reviews">
   <form onSubmit={this.handleSubmit}>
     <input type="text" id="search" value={this.state.searchTerm} onChange={this.handleChange}/>
   </form>
      <MovieReviews reviews={this.state.reviews} />
 </div>
 )
}


 // render() {
 //   return (<div className ="latest-movie-reviews">
 //            <MovieReviews reviews={this.state.reviews} />
 //          </div>)
 // }
}

export default LatestMovieReviewsContainer
