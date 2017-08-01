import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


export default class SearchableMovieReviewsContainer extends React.Component {
   constructor() {
       super();
       
       this.state = {
           searchTerm: '',
           reviews: []
       };

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

    handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(URL + this.state.searchTerm)
        .then(resp => { return resp.json() })
        .then(search => { this.setState({ reviews: search.results }) })
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} />
                    <button type="submit">Search</button>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}