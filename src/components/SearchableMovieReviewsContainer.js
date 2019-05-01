import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'NhTPtsW94YXxZWp2UxvdnsppVaDJmNeq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			searchTerm: ''
		};
	}

	// componentDidMount() {
	//     fetch(URL + this.state.searchTerm)
	//       .then(response => response.json())
	//       .then(data => this.setState({ reviews: data.results }))
 //  	}

  	handleSubmit = event => {
  		event.preventDefault()
  		fetch(URL + '&query=' + this.state.searchTerm)
	      .then(response => response.json())
	      .then(data => this.setState({ reviews: data.results }))
  	}

  	handleChange = event => {
  		this.setState({ 
  			searchTerm: event.target.value 
  		})
  	}


	render() {
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={this.handleSubmit}>
					<label>Search for a Movie Review:</label>
					<input onChange={this.handleChange} type="text" value={this.state.searchTerm} placeholder="movie title, author, etc." />
					<input type="submit" value="Search"/>
				</form>
				<MovieReviews reviews={this.state.reviews} />
				<p>End of Searchable Movies Container</p>
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer