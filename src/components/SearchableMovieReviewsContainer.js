import React from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '172b69c2e74b4c6db843a672b61dd256';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }    

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.fetchMovieReviews()       
    }

    fetchMovieReviews = () => {
        fetch(BASE_URL + this.state.searchTerm)
            .then(response => response.json())
            .then(reviews => this.setState({ reviews: reviews.results }));
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
                <button onClick={this.handleSubmit}>Search</button>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}