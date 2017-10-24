// Code SearchableMovieReviewsContainer Here
import React, { Component }  from 'react'
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = '49e36198ccd74790895a4cba6015ed80';


class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit = (event) => {
    const searchTerm = this.state.searchTerm
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=${searchTerm}&api-key=${NYT_API_KEY}`;
    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
    event.preventDefault();
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

      <div >
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
