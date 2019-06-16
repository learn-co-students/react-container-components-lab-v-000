import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'wUMzDPepVIqzJ9RummLb70qRBkDHnLGv';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super();

        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState({
          value: event.target.value
    })
}

submitClick = (e) => {
    e.preventDefault();
    const queryParams = this.state.value
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${queryParams}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({
            ...this.value,
            reviews: data.results
        })
    })
};


render() {
    return(
        <div className='searchable-movie-reviews'>
        <form onSubmit={this.submitClick} >
            <div>
                <label>
                Search For:
                <input id="query" name="query" type="text" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <button type="submit">Search</button>
             </div>
        </form>
        <MovieReviews reviews={this.state.reviews} />
        </div>
    )
}
}

export default SearchableMovieReviewsContainer