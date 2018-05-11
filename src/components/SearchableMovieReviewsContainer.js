import React, {Component} from 'react';
import MovieReviews from './MovieReviews';


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'


class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL + `query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.results)
      this.setState({reviews: data.results});
    });
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
          />
          <button>Click to search</button>
        </form>
        <p>Search Results:</p>
        <MovieReviews className="latest-movie-reviews" reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;