import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: ""
        };
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            this.setState({
                reviews: json.results
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            this.setState({
                reviews: json.results.filter(review => review.display_title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
            })
        })
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
     
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} name="searchTerm" type="text" value={this.state.searchTerm}></input>
                    <button type="submit">Search</button>
                </form>
                <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer