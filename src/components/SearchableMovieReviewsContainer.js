import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
const API = `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleQuery = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.search(this.state.searchTerm)
    }

    search(searchTerm) {
        fetch(URL + searchTerm + API)
          .then(response => response.json())
          .then(reviews => this.setState({ reviews }))
      }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                        <input id="search" name="search" type="text" onChange={this.handleQuery} value={this.state.searchTerm} />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </form>
                <div>
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer