// Code SearchableMovieReviewsContainer Here
import React from "react";
import 'isomorphic-fetch';
import Review from './MovieReviews'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

class SearchableMovieReviewsContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      reviews: "",
      searchTerm: ""
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  submitSearchTerm = (e) => {
    e.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`, {
      'api-key': NYT_API_KEY
    })
      .then(resp => resp.results)
      .then(results => this.setState({
        reviews: results
      }));
  }



  render(){
    return(

      <div className="searchable-movie-reviews">
        <form type="text" onSubmit={this.submitSearchTerm}>
          <input type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            placeholder="Search Reviews"/>
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.results} />
      </div>
    )
  }


}

export default SearchableMovieReviewsContainer;
