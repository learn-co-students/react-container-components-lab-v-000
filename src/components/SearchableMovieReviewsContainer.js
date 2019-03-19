import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'i6lmC9Bp1utivIEMxQGoueJLPVaAmtq0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }
  getReviews = (event) => {
    let search = this.state.searchTerm

    event.preventDefault();
    fetch(URL + `${search}`)
      .then(reslt => reslt.json())
      .then(jsndata => this.setState({reviews: jsndata.results}))
  }
  render(){
      console.log(this.state.searchTerm)
      console.log("reviews state", this.state.reviews)
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.getReviews}>
          <label>Search Movie Reviews</label>
          <input type="text" onChange={event => this.setState({searchTerm: event.target.value})}></input>
          <button type="submit">search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
