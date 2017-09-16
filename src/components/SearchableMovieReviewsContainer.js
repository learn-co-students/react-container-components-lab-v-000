import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const KEY = '';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json/?api-key=${KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchTerm: 'Panther'
    };
  }

  componentWillMount() {
    this.fetchMovieReviews();
  }

  fetchMovieReviews = () => {
    fetch(URL+this.state.searchTerm)
      .then(response => {
    		if (response.status >= 400) {
    			throw new Error("Bad response from server");
    		}
        return response.json();
      })
      .then(reviews => {
        this.setState({ reviews: reviews.results })
      });
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}
