import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    fetchReviews = () => {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(response => 
            this.setState({
                reviews: response.results
            })
        )
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.fetchReviews();
        e.preventDefault();
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return (this.state.searchTerm !== nextState.searchTerm);
    // }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <h2>Search Reviews</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}