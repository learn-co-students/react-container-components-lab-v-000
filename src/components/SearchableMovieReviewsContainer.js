import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;


 
class SearchableMovieReviewsContainer extends React.Component {
	
	constructor(props) {
	    super(props);	    
	    
	    this.state = {
	      reviews: [],
	      searchTerm: '',
	    };  	

	    this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}
  	
  	

  	findReview(event) {
  		var val = event.target.value
  		var searchURL = URL + val

  		fetch(searchURL)
  			.then(response => response.json()) 
  			.then(obj => obj.results) 
  			.then(reviews => this.setState({
  				reviews
  			}))
  	}	

  	handleChange(event) {
    	this.setState({searchTerm: event.target.value});
  	}

	handleSubmit(event) {
    	
		event.preventDefault(); 
    	var newUrl = URL + this.state.searchTerm
    	console.log(newUrl)
    	fetch(newUrl)
  			.then(response => response.json()) 
  			.then(obj => obj.results) 
  			.then(reviews => this.setState({
  				reviews
  			}))
  		
  	}


	render() {
		
		return (
			  <div className="searchable-movie-reviews">
				  <div className="ui form">
					<form onSubmit={this.handleSubmit}>
				        <label>
				          Review:
				          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
				        </label>
			        	<input type="submit" value="Submit" />
			      	</form>
			      </div>
			    <MovieReviews reviews={this.state.reviews} />
			 </div>
				

			 )
		
	}
}

export default SearchableMovieReviewsContainer;