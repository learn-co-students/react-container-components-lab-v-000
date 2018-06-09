import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			reviews: [],
			searchTerm: '',
		}

	}

	// componentWillMount = () => {
	// 	fetch(URL)
	// 		.then(res => res.json())
	// 		.then(json => this.setState({ 
	// 			reviews: json.results,
	// 		}))
	// }	

	  inputChangeHandler = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	  }

	  handleSubmit = e => {
	    e.preventDefault();

	    fetch(URL.concat(this.state.searchTerm))
	      .then(res => res.json())
    	  .then(res => this.setState({ reviews: res.results }));
	  }


	render() {
		return (
			<div className='searchable-movie-reviews'>
				<form onSubmit={this.handleSubmit}>
					Search: <input type='text' onChange={this.inputChangeHandler} />
				</form>
				<MovieReviews reviews={ this.state.reviews }/>
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer;