import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	reviews: [],
        	searchTerm: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(data => this.setState({reviews : data.results}))
        
    }

    handleChange = (event)=>{
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <button type="submit">Search</button>
                </form>
                { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
                <MovieReviews reviews={ this.state.reviews } />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;


