import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  
        state = { 
            reviews: [], 
            searchTerm: '' };

    handleSubmit(e){
        e.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`)
        .then(results => results.JSON)
        .then(reviews => this.setState({reviews}))
    }

    listResults(){
        debugger
        this.state.movieReviews.map(movie=> <li>movie</li>)
    }
    handleChange(e){
        this.setState({searchTerm: e.target.value})
        console.log(this.state.searchTerm)
    }

    render() {
        return (
                <div className="searchable-movie-reviews">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input onChange={this.handleChange.bind(this)} type="text" placeholder="Search Movies"/>
                        <input type="submit"/>
                    </form>
                    <div className="review-list">
                        <MovieReviews returnedMovieResults={this.listResults} />    
                    </div>
                </div>
        );
    }
}

export default SearchableMovieReviewsContainer;