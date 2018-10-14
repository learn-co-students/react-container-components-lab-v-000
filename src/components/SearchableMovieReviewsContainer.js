import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
     
// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    doSearch = (query) => {
        fetch(URL+`&query=${query}`)
        .then(response => response.json())
        .then((data) => {
    //        console.log("Search",data.results)
            this.setState({ reviews: data.results })
        })
        .catch((error) => console.error("Search Fetch Failed",error));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        (this.doSearch)(this.state.searchTerm)
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search</label>
                    <input type="text" name="searchTerm" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                <MovieReviews header="Search Results" reviews={this.state.reviews} />
            </div>
        )
    }
}