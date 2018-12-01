import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
var Promise = require('es6-promise').Promise;
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;


export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = { reviews: [], searchTerm: '' }
    }

    //fetch data from API

    handleOnChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(BASE_URL.concat(this.state.searchTerm)).then(res => res.json()).then(res => this.setState({ reviews: res.results }));
    }


    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input name='searchTerm' type='text' onChange={this.handleOnChange} />
                    <input type='submit' value='Search' />
                </form>
                <MovieReviews reviews={ this.state.reviews }/>
            </div>
        )
    }
}
