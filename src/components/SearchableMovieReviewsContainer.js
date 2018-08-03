import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    fetchQueryResults = (e) => {
        e.preventDefault();
        fetch(URL + `?query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(json => this.setState({reviews: json.results, searchTerm: this.state.searchTerm}));
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value});
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <h3>Searchable Movie Reviews</h3>
                <form onSubmit={this.fetchQueryResults}>
                    <input type='text' id='query' value={this.state.searchTerm} onChange={this.handleChange}/>
                    <input type='submit' value='Search' />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
