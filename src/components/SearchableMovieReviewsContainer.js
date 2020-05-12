import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'rgvbQr3yxrE5JGHHyN45O9KHEUtpQDze';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state ={
            reviews:[],
            searchTerm:''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const searchUrl = `${URL}` + `&query=${this.state.searchTerm}`
        
        
        fetch(searchUrl)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    reviews: json.results
                })
            })
    
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input name='searchTerm' type='text' onChange={this.handleChange}/>
                    <button type='submit'>submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer