import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class  SearchableMovieReviewsContainer extends React.Component{
    constructor(props) {

        state = {
            searchTerm: '', reviews: []
        };

        handleSearchInputChange = event =>{
                this.setSate({ searchTerm: event.target.value});
        }

        handleSubmit = event => {event.preventDefalut();

                    fetch(BASE_URL.contact(this.state.searchTerm))
                    .then(res => res.json())
                    .then(res => this.setState({ reviews: res.result}));
                };


       render(){
           return(
               <div className="searchable-movie-reviews">
               <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input
                     id = "search-input"
                     type ="text"
                     style={{width: 300}}
                     type="text"
                     style={{ width: 300}}
                     onChange={this.handleSearchInputChange}
                    />
                    <button type="submit">Submit</button>
               </form>
                    {typeof this.state.reviews === 'object' && 
                    this.state.reviews.lenghth > 0 && <h2>Movie Review By Search:</h2>  }

                    <MovieReviews reviews={this.state.reviews} />
               </div>
           )
       }

}

export default SearchableMovieReviewsContainer