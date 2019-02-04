import React, { Component } from 'react';
// import 'isomorphic-fetch';
import ApiManager from '../managers/NytApiManager'
import MovieReviews from './MovieReviews'
import Search from './Search'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ""
        }
        this.apiManager = new ApiManager()
    }

    handleSearchChange = (e) => {
        let value = e.target.value
        this.setState({
            searchTerm: value
        })
    }

    handleSearchSubmit = (e) => {
        e.preventDefault()
        this.apiManager.fetchMovieReviewsSearch(this.state.searchTerm)
        .then(res => {
            if(!res.ok) throw res.statusText
            return res.json()
        })
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
        .catch(e => alert(e))
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <h2>{this.state.reviews.length > 0 ? "Search Results" : null}</h2>
                <Search 
                    handleSubmit={this.handleSearchSubmit}
                    handleChange={this.handleSearchChange}
                    value={this.state.searchTerm}
                />
                <MovieReviews
                    reviews={this.state.reviews}
                />
            </div>
        )
    }


}