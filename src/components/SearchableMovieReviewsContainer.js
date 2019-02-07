import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'GDjk3Fw6tOGdg5ryAmjgwFNeAA0VJrnA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state={
            reviews:[],
            searchTerm: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
            .then(res => res.json())
            .then(movies=> {
                this.setState({
                reviews: movies.results
            })
        })
    }

        render(){
            return(
                <div className="searchable-movie-reviews">
                 <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                     <input type="submit" value="Search" />
                 </form>
                 <MovieReviews reviews={ this.state.reviews } />
                </div>
            )
        }
}