import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state={
            searchTerm: '',
            reviews: []
        }
        // this.fetchSearchMovies = this.fetchSearchMovies.bind(this)
    }
    render(){
        return(
            <div className="searchable-movie-reviews">
             <form onSubmit={ this.fetchSearchMovies() }>
             <input type="text" onChange={ this.search } />
          <button type="submit">submit</button>
             </form>
            <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
    fetchSearchMovies = () => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?`+`api-key=${NYT_API_KEY}`+`&query=${this.state.searchTerm}`).then(response=>response.json())
        .then(movies=>this.setState({reviews: movies.results}))
    }
    search = event =>{
        this.setState({ searchTerm: event.target.value })
    }
    componentDidMount(){
        {this.fetchSearchMovies()}
    }
}