import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';

const NYT_API_KEY = '2uVHaGLBgypiYcHKMy2s9T6maKsRbCeZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviews extends React.Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    fetchMovies = () => {
        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({ reviews: data.results })
            })
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        this.fetchMovies()
    } 

    render() {
            return (
                <div>
                    <h2>Search our database:</h2>
                    <form onSubmit={this.handleFormSubmit}>
                        <input
                            type="text"
                            className="query"
                            value={this.state.searchTerm}    
                            onChange={ event => this.setState({ searchTerm: event.target.value})}
                        />
                        <input type="submit" />
                    </form>
                    <div className='searchable-movie-reviews'>
                        <MovieReviews reviews={this.state.reviews} />
                    </div>
                </div>

            )}
        
    // }
}

export default SearchableMovieReviews;