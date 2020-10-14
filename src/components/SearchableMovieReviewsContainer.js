import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'koxMHPDoawBp0cTEneUQ1N0upjIweo9q';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;
          
    class SearchableMovieReviewsContainer extends React.Component {
        constructor() {
            super()
        
            this.state = {
            reviews: [],
            searchTerm: ""
            };
        }
        
        handleSearchInputChange = event =>
            this.setState({ searchTerm: event.target.value });

        handleSubmit = event => {
            event.preventDefault();

            fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(reviewData => this.setState({ reviews: reviewData.results }));
        }
        
        render() {
            return (
                <div className="searchable-movie-reviews">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="search-input">Search Reviews:</label>
                        <input 
                            id="search-input" 
                            type="text" 
                            style={{ width: 300 }}
                            onChange={this.handleSearchInputChange}
                        />
                        <button type="submit">Submit</button>
                    </form>
                    {typeof this.state.reviews === 'object' &&
                    this.state.reviews.length > 0 && <h2>Movie Review by Search:</h2>}
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            
            )
        }
    }

export default SearchableMovieReviewsContainer;