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
			searchTerm: '',
			reviews: []
		}
	}

	changeText = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	fetchMovies = () => {
		fetch(`${URL}query=${this.state.search}?api-key=${NYT_API_KEY}`)
		.then(response => response.json())
		.then(reviews => this.setState({reviews}))
	}

	render(){
		return(
			<div className="searchable-movie-reviews">
				<input type="text" id="movie-search-box" onChange={this.changeText} />
				<button onClick={this.fetchMovies}>Search!</button>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer