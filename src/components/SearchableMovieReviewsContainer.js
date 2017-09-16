import React from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

  }

  handleChange(ev){
    this.setState({
      searchTerm: ev.target.value
    })
  }

  handleSearch(ev){
    ev.preventDefault();
    fetch(BASE_URL + this.state.searchTerm)
      .then(response => response.json())
      .then(response => this.setState({reviews: response.results}))
  }


  render(){
    return(
      <div className="searchable-movie-reviews">
      <h1>Search</h1>
      <form onSubmit={this.handleSearch}>
        <label>Search: </label>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
