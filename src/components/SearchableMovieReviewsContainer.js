import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: null,
    searchTerm: "starwars"
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    fetch(URL + `&query=${this.state.searchTerm}`).then(resp=>resp.json()).then(data=> this.setState({reviews: data.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={event=> this.setState({searchTerm: event.target.value})}/>
          <input type="submit" />
        </form>
        {(this.state.reviews) ? <MovieReviews reviews={this.state.reviews} /> : <img src="https://i.imgur.com/dpBR607.jpg" alt="no" height="169px" width="169px" />}
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
