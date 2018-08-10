import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

/**
const NYT_API_KEY = '4b30b9f288084bcaa178a3f3159c13cd' //'f98593a095b44546bf4073744b540da0';

const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=black?`
            + `api-key=${NYT_API_KEY}`;
//https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term> **/

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }


  handleInputChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   })
 }// end handleInputChange

 handleSubmit = (event) => {
   event.preventDefault()
   fetch(URL+'='+this.state.searchTerm)
     .then(response => response.json())
     .then(response => {
       console.log(response.results)
       this.setState({
         reviews: response.results
       })
     })//end fetch
 }





  render() {

    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Enter a Search Term
              <input
                id="search"
                name="search"
                type="text"
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                />
            </label>
          </div>
          <div>
            <button type="submit" >Find Reviews</button>
          </div>
        </form>

        < MovieReviews reviews={this.state.reviews}/>

      </div>
    )
  }

}// end class

export default SearchableMovieReviewsContainer;
