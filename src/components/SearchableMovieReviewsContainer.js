import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const searchTerm = "Dramas"
const NYT_API_KEY = '51OGJcsvTYl5xizG'
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}`
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super();
    
        this.state = {
          reviews: [],
          searchTerm: ''
        };
      }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(movies => this.setState({reviews: movies.results}))
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
            <form></form>
            </div>
        )
    }
}