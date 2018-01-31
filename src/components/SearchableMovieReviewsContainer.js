import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'eb7bccfc45bb46d7a1671aaf80e279ac';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super();
     
        this.state = {
          reviews: [],
          searchTerm: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({searchTerm: event.target.value});
        this.search();   
    }

    search = () => {
        fetch(URL + this.state.searchTerm + `&api-key=` + NYT_API_KEY)
        .then(response => response.json())
        .then(reviews => this.setState({ reviews }))
    }

    render() {
        return (
          <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searchTerm} />
                <input type="submit" value="Search" />
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
}

export default SearchableMovieReviewsContainer;