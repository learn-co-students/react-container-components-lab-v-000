import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {
	constructor(props){
		super(props)

		this.state = {
			reviews: [],
			searchTerm: ''
		}
	}


	getReviews = (e) => {
		e.preventDefault()
		fetch(`${URL}&query=${this.state.searchTerm}`)
		.then(response => response.json())
		.then(reviews => this.setState({ reviews }))
	}


	setReviews = (e) => {
		e.preventDefault()
		const searchTerm = document.querySelector('#searchTerm').value
		this.setState({
			searchTerm: searchTerm
		})
	}


	render(){
		return(
			<div className="searchable-movie-reviews">
				<form onSubmit={this.getReviews}>
	          		<input type="text" value={this.state.searchTerm} onChange={this.setReviews} />
	        		<input type="submit" />
	      		</form>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer




