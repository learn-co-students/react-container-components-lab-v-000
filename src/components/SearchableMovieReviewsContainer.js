import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.reviews !== [];
  }

  onClickButton = event => {
    event.preventDefault();
    fetch(URL + this.state.searchTerm)
      .then(response => response.json())
      .then(movieData => this.setState({ reviews: movieData.results }))
  }

  handleChange = event => {
     this.setState({
       [event.target.name]: event.target.value
     })
   }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.onClickButton}>
          <input name="searchTerm" type="text" onChange={event => this.handleChange(event)} value={this.state.searchTerm} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews movies={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
