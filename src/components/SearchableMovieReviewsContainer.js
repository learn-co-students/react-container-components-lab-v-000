import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
	constructor(){
		super()
		this.state = {
			reviews: [],
			searchTerm: ''
		}
	}

	// fetchReviews = () => {
	// 	fetch(URL).then(resp => resp.json()).then(data => this.setState({reviews: data.results}))
	// }

	handleChange = (event) => {
	  this.setState({searchTerm: event.target.value});
	}

	handleSubmit = (event) =>{
		// this.fetchReviews
		event.preventDefault();
		fetch(`${URL}&query=${this.state.searchTerm}`).then(resp => resp.json()).then(data => this.setState({reviews: data.results}))
	}

	render(){
		return(
			<div className="searchable-movie-reviews">
				<form onSubmit={this.handleSubmit}>
	        <label>
	          Movie Name:
	          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
	        </label>
	        <input type="submit" value="Submit" />
	      </form>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
			);
	}

}

export default SearchableMovieReviewsContainer