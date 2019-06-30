import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vo01Ra874Fgr9Ao2Yc5c4jiUpRCNXPXt';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state={
            reviews: [],
            searchTerm: ''
        }
    }

    // componentDidMount(){
    //     fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`)
    //     .then(response => response.json())
    //     .then(reviews => this.setState({ searchTerm: }))

    // }

    handleSubmit = event => {
        event.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`)
         .then(response => response.json())
         .then(reviews => this.setState({reviews: reviews.results}))

      }
    
      
    render(){
        return(
            <div className="searchable-movie-reviews">
              <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})}/>
              </form>
              <MovieReviews reviews={this.state.reviews}/>
            </div>   
        )
    }
}
