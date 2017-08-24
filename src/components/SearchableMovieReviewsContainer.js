//Container Component
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
            reviews: [],
            searchTerm: ""
        }
    
        this.searchTermChange = this.searchTermChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    searchTermChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(response => this.setState({ reviews: response.results }))
        .catch(error => console.log(error));
    }

    render() {
        return (
        <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
            <h2> Movie Review Search </h2>
                <input 
                id="search-term" 
                type="text"
                value={this.state.searchTerm} 
                onChange={this.searchTermChange}  
                />
                <button type="submit">Submit</button>
            </form>
            <br/>
            <MovieReviews reviews={this.state.reviews} />
            ----------------------------------------------------------------------------------------------
        </div>
        )
    }
}