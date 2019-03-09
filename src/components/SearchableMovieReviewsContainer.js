import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'EEfGaafWthZgEI2P6MIrpLZfvawHpFsM';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
            

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: 'Styx'
        };
    }

    setSearch = (e) => this.setState({searchTerm: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault();

        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => {
            this.setState({reviews: data.results})
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form id="form" onSubmit={this.handleSubmit}>
                    <input id="search"
                    type="text"
                    onChange={this.setSearch}
                    />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    // setSearch(e) {
    //     debugger;
    //     this.setState({ searchTerm: e.target.search.value })
    // }
}
