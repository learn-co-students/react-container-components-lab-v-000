import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = '76ce291c1ab6487d84281d1a37c6555f';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
+ `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component{
    state = {
        reviews: [],
        searchTerm: "search"
    }
       

    handleSubmit = event => {
        event.preventDefault();
    
        fetch(URL.concat(this.state.searchTerm))
          .then(res => res.json())
          .then(res => this.setState({ reviews: res.results }));
      }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
        }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form  onSubmit={this.handleSubmit}>
                    <input type="text" name="search" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
                { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
                <MovieReviews reviews={ this.state.reviews } />
                
            </div>
        )
    }
}
