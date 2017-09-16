import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '7497462d55ff469e9c46d5430a77e5c5';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json/?api-key=${NYT_API_KEY}&query=`;

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
