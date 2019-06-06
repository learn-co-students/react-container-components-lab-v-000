import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SimpleSearch from './SimpleSearch'

const NYT_API_KEY = 'wsmWKAAsy4Qwj3zR2h8LE9hegDReGAwl';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = { reviews: [],
										searchTerm: ""
								 }
  }
  
  fetchReviews = (url) => {
    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json()
      })
      .then(function(movieJSON) {
        return movieJSON.results
      })
      .then(reviews => this.setState({reviews}))
      .catch(console.log)
  }

	updateSearchParam = (param) => {
		this.setState({searchTerm: param})
		const url = URL + '&query=' + param
		this.fetchReviews (url)
	}

  render () {
    return (
      <div id="container" className="searchable-movie-reviews">
				<div>				
					{ < SimpleSearch updateSearchParam={this.updateSearchParam} />  }
				</div>
				<div>  
					{ < MovieReviews reviews={this.state.reviews} /> }
				</div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer

