import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

//provide a searchable interface allowing the user to enter a search term 
//and then receive a list of reviews that match the search term(s). 

//need to add &query=<search-term> to url

//should have a top-level wrapping element with class searchable-movie-reviews
class SearchableMovieReviewsContainer extends Component {
  
    state = {
        searchTerm: "",
        reviews: []
    }
  

    handleSumbit = event => {
        event.preventDefault();
        //console.log("yay submitted")
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(json =>{
            
            this.setState({reviews: json.results})
            //console.log(this.state.reviews)
        })

    }

    handleSearchInputChange = event => {
        //console.log(this.state.searchTerm)
        this.setState({searchTerm: event.target.value})
    }

    render() {
    return <div>
        <h2>SearchContatiner</h2>
        <form onSubmit={this.handleSumbit}>
            <input type="text" onChange={this.handleSearchInputChange}></input>
            <button type="submit">Submit</button>
        </form>

        <MovieReviews reviews={this.state.reviews} />


    </div>
  }
}
 
export default SearchableMovieReviewsContainer