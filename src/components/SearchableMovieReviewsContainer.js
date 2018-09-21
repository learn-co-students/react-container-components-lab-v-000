import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4d950ac5cb534c81990eeadb53224f0c';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }
    
    onChange = (event) => {
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    searchRev = (event) => {
        event.preventDefault()
        var url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`
        fetch(url)
        .then(resp => 
            resp.json()
        ).then( data => {
            this.setState({
                reviews: data.results
            })
        }
        )
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
            <form onSubmit={event => this.searchRev(event)}>
                <input type='text' name='searchTerm' onChange={this.onChange} />
                <button>Seach NYT Reviews</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
            </div>
            
            )
    }
}

export default SearchableMovieReviewsContainer