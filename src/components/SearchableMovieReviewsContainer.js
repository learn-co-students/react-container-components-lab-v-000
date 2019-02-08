import React from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AoOucKUt3jpmSGw7FgqzD6nHaJ0oCDbz'


class SearchableMovieReviewsContainer extends React.Component {
  
	constructor() {
	    super()
	 
	    this.state = {
	      reviews: [],
	      searchTerm: ''
	    }
	}

	handleSubmit = event => {
		event.preventDefault()

		const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
		 + `query=${this.state.searchTerm}`
		 + '&'
		 + `api-key=${NYT_API_KEY}`
		 
	    fetch(URL)
	      .then(function(response) {
	        if (response.status >= 400) {
	          throw new Error("Bad response from server")
	        }
	        return response.json()
	      })
	      .then(data => this.setState({ reviews: data.results })) 
	}

	handleChange = event => {
	  this.setState({
	    [event.target.name]: event.target.value
	  })
	}

	render() {
  		
	    return (
	       <div className="searchable-movie-reviews">
	        <h3>Search for a Movie Review (Returns the latest reviews if blank)</h3>
	        <form onSubmit={this.handleSubmit}>
	    		<input id="searchTerm" name="searchTerm" type="text" onChange={this.handleChange} />
				<input type="submit" value="Submit" />
	  		</form>
	  		<h3>Searched Movie Reviews</h3>
	  		<MovieReviews reviews={this.state.reviews}/>
	      </div>
	    )
  	}
}

export default SearchableMovieReviewsContainer