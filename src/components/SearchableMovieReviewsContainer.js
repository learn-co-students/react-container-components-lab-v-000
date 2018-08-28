import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`;

export default class SearchableMovieReviews extends Component{

    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange= (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newURL = URL + `query="${this.state.searchTerm}"api-key=${NYT_API_KEY}`
        fetch(newURL)
        .then(response => response.json())
        .then(reviews => this.setState({ reviews: reviews.results }))
        debugger
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                <input type="submit" value="Search"></input>
            </form>
            <br/>
            <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}
