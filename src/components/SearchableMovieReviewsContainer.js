import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ydNAruCfDoCw2gKSQsIwEEI5754N6acv';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
    `api-key=${ NYT_API_KEY}&query=`;
            
class SearchableMovieReviewsContainer extends Component {
    
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        };
    }
    

    handleChange = event => this.setState({ searchTerm: event.target.value })
    


    handleSubmit = event => {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(data => this.setState({ reviews: data.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    <input type="submit" value="Search Reviews" />
                </form> 
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer


