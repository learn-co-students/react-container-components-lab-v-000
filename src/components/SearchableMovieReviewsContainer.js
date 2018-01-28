import React from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>`
            + `&api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUrl(searchTerm) {
    return `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}`
                + `&api-key=${NYT_API_KEY}`;
  }

  handleChange(event) {
   this.setState({searchTerm: event.target.value});
   }

   handleSubmit(event) {
     event.preventDefault();
     fetch(this.getUrl(this.state.searchTerm))
       .then(response => response.json())
       .then(json => this.setState({ reviews: json.results }));
   }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>SEARCHABLE REVIEW</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Reviews:
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}


export default SearchableMovieReviewsContainer;
