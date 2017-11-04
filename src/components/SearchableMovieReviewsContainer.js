import React from 'react';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  search = (event) => {

    const NYT_API_KEY = `f98593a095b44546bf4073744b540da0`;
    const searchTerm = event.target.value;
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
                  + `query=${searchTerm}&`
                  + `api-key=${NYT_API_KEY}`;

    fetch(URL)
      .then(res => res.json())
      .then(res => this.setState({reviews: res.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <input type="text" onChange={this.search} value={this.state.searchTerm} />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
