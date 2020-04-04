import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'SgO7r1ZN0mKBHKJteEDUWrNhJFzoKyo0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleChange = (event) => {
        event.persist()
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL.concat('&query=', this.state.searchTerm))
        .then(resp => resp.json())
        .then(({ results }) => this.setState({ reviews: results }))
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews:</label>
                    <input type ='text' onChange={this.handleChange} value={this.state.searchTerm}></input>
                    <button type='submit'>Search</button>
                </form>
                {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer