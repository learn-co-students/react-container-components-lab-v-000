import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentWillMount = () => {
    var url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`
    fetch(url)
      .then(res => res.json())
      .then(reviews => this.setState({reviews}))
  }

  render = () => {
    return(
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
