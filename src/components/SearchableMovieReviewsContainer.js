import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
// provide a searchable interface allowing the user to enter a search term and then receive a list of reviews that match the search term(s).
// have a top-level wrapping element with class searchable-movie-reviews.
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(movies => {
            this.setState({
                reviews: movies.results, 
                searchTerm: ""
            })
        })
        .catch(error => alert(error.message))
    }

    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Enter a Search Term </label>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="searchTerm"
                            value={this.state.searchTerm}
                            onChange={this.handleInputChange}></input>
                    </div>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </form>
                <br></br>
                <MovieReviews reviews={this.state.reviews} />
                <hr></hr>
                <hr></hr>
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer