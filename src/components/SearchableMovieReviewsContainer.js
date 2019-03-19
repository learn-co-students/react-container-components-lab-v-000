import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'upPV8cVwwKuMboNpjSFd5xnnWp39ZlTi';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm + `&api-key=${NYT_API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form className="ui form" onSubmit={event => this.handleSubmit(event)}>
          <h3>Enter a Search Term:</h3>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />

          <div className="field">
            <button className="ui secondary button" type="submit">Find Movies</button>
          </div>
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
