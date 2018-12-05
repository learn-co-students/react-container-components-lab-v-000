import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const SEARCH = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                + `api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(SEARCH+this.state.query)
        fetch(SEARCH+this.state.query)
        .then(response => response.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    handleInput = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleInput}
                        type='text'/>
                    <input
                        type='submit'/>
                </form>
                Here's the movie ya searched for:
            <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}