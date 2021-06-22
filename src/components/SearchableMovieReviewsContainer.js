import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8ZQNa4f2Wn0pi7TydyxTFiusUj69sPtM';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {moviesList : [], searchTerm: ''}
    
    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.movieSearch}>
                    <label>search for a specific movie</label>
                    <input type='text' onChange={this.movieNameInput}></input>
                    <button type='submit'>submit</button>
                </form>
                {typeof this.state.reviews === 'object' &&
                this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.moviesList} />
            </div>
        )
    }

    movieNameInput = (event) => {
        this.setState({searchTerm: URL + `&query=${event.target.value}`})
    }

    movieSearch = event => {
        event.preventDefault()
        fetch(this.state.searchTerm)
        .then(res => res.json())
        .then(results => this.setState({moviesList: results.results}))
    }
}
export default SearchableMovieReviewsContainer