// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const KEY = `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component{

    constructor(){
        super()
        this.state={
            reviews: [],
            searchTerm: ""
        }
    }

    fetchStories = () => {
        var that = this
        fetch(URL + this.state.searchTerm + "?" + KEY).then(response => {
            return response.json();
        }).then((response) => {
            that.setState({
                reviews: response.results
            })
            debugger
        })
    };

    componentWillMount() {
        this.fetchStories()
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer