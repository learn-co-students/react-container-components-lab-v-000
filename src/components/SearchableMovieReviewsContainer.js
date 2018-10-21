import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + '&query=';
// Code SearchableMovieReviewsContainer Here
//  http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/movies/v2/reviews/search.json?
    // api-key=f98593a095b44546bf4073744b540da0&query=turtle
export default class SearchableMovieReviewsContainer extends Component {

    state={
        reviews: [],
        searchTerm: 'dog'
        }
    
    handleChange = (event) => {
        // event.persist();
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then(response=> response.json())
            .then(res=>this.setState({reviews: res.results}))
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
                </form>
                <h1>Searched Reviews</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
