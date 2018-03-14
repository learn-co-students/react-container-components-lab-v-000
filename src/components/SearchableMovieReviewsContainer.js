// Code SearchableMovieReviewsContainer Here
import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';

class SearchableMovieReviewsContainer extends React.Component{
	constructor(){
		super()

		this.state = {
			searchTerm: "",
			reviews: []
		}
	}

  // request reviews with search term from nyt
  fetchNYTMovies = () => {
		fetch(`${URL}query=${this.state.search}?api-key=${NYT_API_KEY}`)
  		.then(response => response.json())
  		.then(reviews => this.setState({reviews}));
	}

  // update the term's state as the user types
	updateInput = (event) => {
		this.setState({
			searchTerm: event.target.value
		});
	}


	render(){
		return(
			<div className="searchable-movie-reviews">
				<input type="text" id="movie-search-box" onChange={this.updateInput} />
				<button onClick={this.fetchNYTMovies}>Search for Reviews</button>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer;
