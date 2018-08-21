import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    // Constructor for using/initializing state
    constructor() {
        super();
        
        // Define the initial state:
        this.state = {
          reviews: [],
          searchTerm: ''
        };
    }
    
    // Function to get the movie reviews by search param/query
    getReviews = () => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=faeaf284e2c74b9bb2f3f5f249169ce7`)
            .then(response => {
                return response.json();
            })
            .then(reviews => {
                const reviewsList = reviews.results
                console.log(reviewsList);
                this.setState({ reviews: reviewsList })
            });
    }

    // Update the searchTerm state
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
          <div className="searchable-movie-reviews">
              <form onSubmit={this.getReviews}>
                <div>
                  <label>
                    Search Movie Reviews
                    <input id="searchTerm" name="searchTerm" type="text" onChange={this.handleInputChange} value={this.state.searchTerm}/>
                  </label>
                </div>
                <div>
                  <button type="submit">Search</button>
                </div>
              </form>
              <MovieReviews reviews={this.state.reviews} />
          </div>
        );
    }
}
