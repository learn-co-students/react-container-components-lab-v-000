import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';


// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
    }

    handleChange = (event) => {
        event.persist()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    fetchSearchReviews = (event) => {
        event.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=${NYT_API_KEY}`)
        .then(response => response.json())
        .then(data => {this.setState({ reviews: data.results })})
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.fetchSearchReviews}>
                    <input type='text' name='searchTerm' value={this.state.searchTerm} onChange={this.handleChange}/>
                    <input type='submit' />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}