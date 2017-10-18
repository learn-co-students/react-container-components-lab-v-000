// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  componentWillMount() {
    var NYT_API_KEY = '5c98088bd0ed4c878e5a0918fbb94914';
    var URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
                + `query=${this.state.searchTerm}`
                + `api-key=${NYT_API_KEY}`;
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        Search for: <input type="text" value={this.state.searchTerm} onChange={this.handleSearch}    />
        <MovieReviews
          reviews={this.state.reviews}
        />
      </div>
    );
  }

}

export default SearchableMovieReviewsContainer;
