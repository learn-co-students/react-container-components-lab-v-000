import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearchChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(reviewData => this.setState({ reviews: reviewData.results }))
    }

    render() {
        return (<div className='searchable-movie-reviews'>
            <h3>Search Reviews</h3>
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='searchTerm' onChange={this.handleSearchChange} ></input>
            </form>

            <MovieReviews reviews={this.state.reviews} />
                    
        </div>)
    }
}

export default SearchableMovieReviewsContainer;