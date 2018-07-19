import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL_PREFIX = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
const URL_SUFFIX = `&api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchTerm: this.props.searchTerm
    };
  }

  componentDidMount(){
    fetch(URL_PREFIX + this.props.searchTerm + URL_SUFFIX)
      .then(res => res.json())
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
