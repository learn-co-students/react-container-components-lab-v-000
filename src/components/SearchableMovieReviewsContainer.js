import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '?api-key=xla7TOj9xSpAP3F4GlQkSBoQb8NrrcsD';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json'
    + `${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    onSubmit = event => {
        event.preventDefault()
        console.log("subumitted")
        this.fetchReviews(this.state.searchTerm)
    }

    handleChange = event => {
        event.persist()
        this.setState({
            searchTerm: event.target.value
        })
    }

    fetchReviews = (searchTerm = this.state.searchTerm) => {
        fetch(URL + `${searchTerm}`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    reviews: data.results
                }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.onSubmit}>
                    <h2>Search New York Times movie reviews:</h2> <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer