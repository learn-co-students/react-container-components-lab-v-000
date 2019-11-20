//containter component
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearcheableMovieReviewsContainer extends React.Component {
    constructor() {
    super();
    this.state = {reviews: [],
    	searchTerm: ""
        }
     }

   componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then((response) => this.setState({ reviews: response }))
   }

   eventHandler(e) {
     e.preventDefault();
     this.performSearch();
   }


   performSearch() {
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          reviews: response.results,
        });
      })
  }


   handleInputChange(event) {
      this.setState({searchTerm: event.target.value})
   }
	
   render() {
   	return (
	<div className= "searchable-movie-reviews">
	  <MovieReviews key={this.state.searchTerm} reviews={this.state.reviews} />
	  <form onSubmit={(e)=> {this.eventHandler(e)}}>
       <label>
        <input type="text" name="input" placeholder="Search..." value={this.state.searchTerm} onChange={(e)=> {this.handleInputChange(e)}}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
	</div>
	)
   }

}

export default SearcheableMovieReviewsContainer;