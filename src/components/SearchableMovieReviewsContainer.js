import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [], 
        searchTerm: ""
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <input type="submit" value="Search Movies"/>
                </form>
                { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

    

    

    handleSubmit = event => {
        event.preventDefault()
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(({results}) => this.setState({ reviews: results}))
        .catch(error => console.log(error))
    }


    handleChange = ({target: {value}}) => {
        this.setState({searchTerm: value})
    }
}