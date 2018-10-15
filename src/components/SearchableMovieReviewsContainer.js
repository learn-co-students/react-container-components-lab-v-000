import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL + '&' + `query=${this.state.query}`)
            .then(response => response.json())
            .then(responseJSON => this.setState({ reviews: responseJSON.results}))
        this.setState({
            searchTerm: ''
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Query: </label>
                        <input type="text" value={this.state.earchTerm} onChange={this.handleChange} />
                    </p>
                    <input type="submit" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
