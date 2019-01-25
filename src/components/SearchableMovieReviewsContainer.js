import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ovJjEMTuWDXl3pqlABRRc3dY9X7jgCdT';
const URL = (searchTerm) => `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}`
            + `&api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit= event => {
        event.preventDefault();

        fetch(`${URL( this.state.searchTerm )}` )
            .then(response => response.json())
            .then(response => this.setState({ reviews: response.results }))
    }

    handleSearchChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }
        

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="input">Search for Movie Reviews</label>
                    <input id="input" type="text" onChange={this.handleSearchChange}/>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={ this.state.reviews } />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
