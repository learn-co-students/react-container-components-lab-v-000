// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			reviews: [],
			searchTerm: '',
		}
	}

	fetchMovies = () =>{
    	const queryURL = URL + `?query=${searchTerm}`
    	fetch(queryURL)
    	  .then(res => res.json())
    	  .then(response => this.setState({ reviews: response.results }));
  	}

  	handleSearch = event => {
  		this.setState ({
  			searchTerm: event.target.value
  		})
  	}

  	handleSearchSubmit = event => {
  		this.fetchMovies(); 
  	}

  	render() {
  		return (
  			<div className="searchable-movie-reviews">
  				<label>Movie Search</label>
  				<input 
  					type="text"
  					value={this.state.searchTerm}
  					onChange={this.handleSearch} 
  				/>
  				<input onClick={this.handleSearchSubmit} type="submit" name="search" />
  				<MovieReviews reviews={this.state.reviews} />
  			</div>		
  		)
  	}
}   

export default SearchableMovieReviewsContainer;         