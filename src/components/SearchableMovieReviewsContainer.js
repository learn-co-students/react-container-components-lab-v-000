// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  fetchReviews = () => {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.jsonquery=' + this.state.searchTerm + `?api-key=f98593a095b44546bf4073744b540da0`)
      .then((resp) => {
        if (resp.status >= 400) {
          return new Error("Server gave a bad response");
        }
        return resp.json();
      })
      .then((reviews) => {
        this.updateReviews(reviews.results)
      });
  }

  updateReviews = (reviews) => {
    this.setState({
      reviews: reviews
    })
  }

  componentWillMount() {
    this.fetchReviews()
  }

  render() {
    return (
      <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
    );
  }
}

export default SearchableMovieReviewsContainer
