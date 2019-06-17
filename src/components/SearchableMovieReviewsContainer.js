import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'XGkeHtNklC0A3GXGj7m1JxBNqIQLAFuG';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: 'batman'
    }
  }

  componentDidMount(){
    fetch(BASE_URL + this.state.searchTerm)
              .then(resp => resp.json())
              .then(reviews => this.setState({ reviews: reviews.results}))
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.setState({
      searchTerm : event.target.value
    })
  }


  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form>
          <input onChange={this.handleSearch} value={this.state.searchTerm}/>
          <MovieReviews reviews={this.state.reviews} />
        </form>
      </div>
    );
  }

}

export default SearchableMovieReviewsContainer;
