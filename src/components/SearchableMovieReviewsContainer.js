import React, { PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = '';  // ENTER YOUR API KEY HERE
const URL = searchTerm => { return `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&`
            + `api-key=${NYT_API_KEY}`; }

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends PureComponent {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL(this.state.searchTerm))
            .then(res => res.json())
                .then(data => this.setState({ reviews: data.results }))
    }

    render() {
        return (
                <div className="searchable-movie-reviews">
                    <form onSubmit={this.handleSubmit}>
                        <label for='queryTerm'> Search Movie Reviews: </label>
                        <input type="text" name="queryTerm" onChange={this.handleChange}/>
                        <input type="submit"/>
                    </form>

                    { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
                    < MovieReviews reviews={this.state.reviews} />
                </div>
        )
    }
}