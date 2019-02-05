import React from 'react'
import 'es6-promise/auto'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'


// const NYT_API_KEY = 'AoOucKUt3jpmSGw7FgqzD6nHaJ0oCDbz'
//    const NYT_QUERY = 'daughter'
  //   const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  //    + `query=${NYT_QUERY}`
  //    + '&'
 //            + `api-key=${NYT_API_KEY}`

class SearchableMovieReviewsContainer extends React.Component {
  
	// constructor() {
 //    super()
 
 //    this.state = {
 //      reviews: [],
 //      searchTerm: 'daughter'
 //    }
	// }

	// componentDidMount() {
 //    fetch(URL)
 //      .then(function(response) {
 //        if (response.status >= 400) {
 //          throw new Error("Bad response from server")
 //        }
 //        return response.json()
 //      })
 //      .then(data => this.setState({ reviews: data.results })) 
 //  }

	// render() {
  
 //    return (
 //       <div className="searchable-movie-reviews">
 //        Hello Searchable!
 //        <MovieReviews reviewList={this.state.reviews}/>
 //      </div>
 //    )
 //  }

}

export default SearchableMovieReviewsContainer