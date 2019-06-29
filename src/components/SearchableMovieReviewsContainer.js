import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'xLbNyTY2gyRl1cfZEqjs18qqX8GR2hZ0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;


 export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearchTermChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

         fetch(URL + this.state.searchTerm)
            .then(resp => resp.json())
            .then(searchedMovieData => this.setState({
                reviews: searchedMovieData.results
            }))
    };

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search Movie Reviews </label>
                    <input onChange={this.handleSearchTermChange} />
                    <button type="submit">Submit</button>
                </form>

      {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}

                 < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

 }
