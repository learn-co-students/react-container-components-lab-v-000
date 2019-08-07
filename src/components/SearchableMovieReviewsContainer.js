import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'A4YfXRaIE2iyMKNjPeRyWetREEJJHRek';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
`api-key=${NYT_API_KEY}&query=`;
            

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})

    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(URL + this.state.searchTerm)
            .then(response => response.json())
            .then(({results}) => this.setState({reviews: results}));

    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input 
                        id="search-input"
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>

                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer
