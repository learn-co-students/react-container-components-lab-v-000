import React from 'react'
import 'es6-promise/auto'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_QUERY = 'daughter'
const NYT_API_KEY = 'AoOucKUt3jpmSGw7FgqzD6nHaJ0oCDbz'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
 + `query=${NYT_QUERY}`
 + '&'
 + `api-key=${NYT_API_KEY}`

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
	    [event.target.searchTerm]: event.target.value
	  })
	}

	render() {
  	
    return (
       <div className="searchable-movie-reviews">
        <h3>Search for a Movie Review</h3>
        <form onSubmit={event => this.handleSubmit(event)}>
    		<input type="text" name="searchTerm" onChange={event => this.handleChange(event)} value={this.state.searchTerm} />
			<input type="submit" value="Submit" />
  		</form>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer