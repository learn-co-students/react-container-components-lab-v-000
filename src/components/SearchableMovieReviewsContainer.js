import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    fetchReviews = (searchTerm) => {
        fetch(URL + `&query=${searchTerm}`)
        .then(response => response.json())
        .then(response => this.setState({
            reviews: response.results
        }))
    }

    componentDidMount(){
        this.fetchReviews()
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.fetchReviews(this.state.searchTerm)
    }

    changeReview = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <h2>Searchable Movie Reviews</h2>
                <p>↓You can search here↓</p>
                <form onSubmit={this.handleSearch}>
                    <input type='text' value={this.state.searchTerm} onChange={this.changeReview}></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
                <br/><br/>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer;

