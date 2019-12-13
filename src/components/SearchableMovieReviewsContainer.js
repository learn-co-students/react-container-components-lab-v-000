import React, { Component } from 'react'

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }
    
    render() { 
        return ( 
            <div className="searchable-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
         );
    }

    componentDidUpdate() {
        fetch(URL + `&${this.state.searchTerm}`)
          .then(res => res.json())
          .then(data => {
              this.setState({
                reviews: data
            })
          })
    }

}
 
export default SearchableMovieReviewsContainer;