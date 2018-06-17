// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const query = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>'

class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch(query)
            .then(response => response.json())
            .then((reviews => this.setState({ reviews })));
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer