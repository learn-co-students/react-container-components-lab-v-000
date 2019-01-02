import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2263a46a1ebb4ec7afdfaba376704bd6';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
   
        state = ({reviews: [], searchTerm: ""})
  

   

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${URL}${this.state.searchTerm}`)
        .then(response => response.json())
        .then(searchResults => this.setState({reviews: searchResults.results}))
    }

    handleChange = (e) =>{
        this.setState({
            searchTerm: e.target.value
        })
    }

    render (){
        return(
        <div className="searchable-movie-reviews">
            <MovieReviews reviews={this.state.reviews}/>
            <form onSubmit={this.handleSubmit}>
                Search Movie Reviews: <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
            </form>
        </div>)

    }

}
