import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'zTu8PGnUciYERxR2itooxX6eqMmee3BR';

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
        .then(response => response.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }
    
    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='search-input' onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}