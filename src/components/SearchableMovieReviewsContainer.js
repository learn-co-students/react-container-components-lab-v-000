import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

class SearchableMovieReviewsContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			searchTerm: 'test',
    	    reviews: []
   		}
	}

	componentDidUpdate() {
		this.setState({reviews: this.fetchReviews() });
	}

	fetchReviews() {
	   	return fetch(URL + this.state.searchTerm).then(response=> {
	   	   return response.json()
	   	}).then(reviews=> {
	  	    return reviews.results
	  	});
    }

	render() {
		return (
			<MovieReviews className="searchable-movie-reviews" reviews={this.state.reviews} />
		)
	}
}

export default SearchableMovieReviewsContainer