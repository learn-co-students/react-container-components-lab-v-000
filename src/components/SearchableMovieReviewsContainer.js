import React from 'react';

import MovieReviews from './MovieReviews';

export default class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: ""
        };
    }

    componentWillMount() {
    var url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`
    fetch(url)
      .then(resp => resp.json())
      .then(reviews => this.setState(
        { reviews})
      );
    }

    handleSearchTerm = (event) => {
      this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
              <h3>Search Reviews</h3>
              <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTerm}></input>
              <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}