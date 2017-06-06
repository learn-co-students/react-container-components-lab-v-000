const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');

const MovieReviews = require('./MovieReviews');

const NYT_API_KEY = '55285c0c95aa4533adb48b6f7bde67ca';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      search: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    fetch(BASE_URL)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        this.setState({ reviews: json });
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
  }

  handleChange(ev) {
    this.setState({search: ev.target.value})
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Movie Review Search Results</h2>
        <MovieReviews reviews={this.state.reviews} />

        <form className="search-bar" onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>

      </div>
    );
  };
}

module.exports = SearchableMovieReviewsContainer;
