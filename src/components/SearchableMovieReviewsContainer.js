import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

  state = {reviews: [], searchTerm: ''}

  handlesearchTermChange = event => {this.setState({searchTerm: event.target.value})}

  handleSubmit = event => {
  event.preventDefault();
  fetch(`${URL}?query=${this.state.searchTerm}`)
  .then(response => response.json())
  .then((data)=> {
    this.setState({reviews: data.results})});

  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.value} onChange={event => this.handlesearchTermChange(event)}></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div><MovieReviews reviews={this.state.reviews}/></div>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
