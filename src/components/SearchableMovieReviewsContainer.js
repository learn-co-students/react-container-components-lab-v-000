// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = { 
            searchTerm: "",
            reviews: [] 
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(reviews => this.setState({ reviews: reviews }))
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
