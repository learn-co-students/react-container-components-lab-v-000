'use strict';

const React = require('react');
const MovieReviews = require('./MovieReviews');

const SearchInput = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input className="search-field" type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      query: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = e.target.firstChild.value;
    this.setState({ query });

    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=8b680b3733f14091bb77f382ea8592c5&query=' + query)
      .then(r => r.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <SearchInput
          value={this.state.query}
          handleSubmit={this.handleSubmit}
        />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;
