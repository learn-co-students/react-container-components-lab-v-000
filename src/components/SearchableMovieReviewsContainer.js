import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JfdVYhQlv44FETxwt2CQW6DA5lzqHSkK';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {

    state = {
        searchTerm: "",
        reviews: []
    };


    handleInputChange = (event) => {
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
        .then(response => response.json())
        .then(response => this.setState({reviews: response.results}))
    }


    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                <label>Enter Search Term:</label> 
                <input type="text" id="search-input" style={{ width: 300}} onChange={this.handleInputChange}/>
                <button type="submit">Submit</button> 
                </form>
                {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }




}


export default SearchableMovieReviewsContainer;