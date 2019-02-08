import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'alu5ePQpLVyFHfZoVGEbMfqQ5gVJWQn1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            searchTerm:''
        }
    }

    handleSearch() {
        fetch(URL)
        .then(res =>res.json())
        // .then(response => this.setState({reviews: response.results}, () => console.log(this.state.reviews)))
         .then(response => this.setState({reviews: response.results}))
        .catch(err=> console.log("Error"))
    }

    handleChange(e) {
        this.setState({searchTerm:e.target.value})
    }

    render() {
        return (   
                <div className="searchable-movie-reviews">
                    <form onSubmit={this.handleSearch}>
                        <input type="text" id="search" placeholder="Search" value={this.state.searchTerm} onChange={this.handleChange}/>
                        <button type="button" id="button" >Search</button>
                    </form> 
                    {this.state.reviews ? <MovieReviews reviews={this.state.reviews} /> : null}  
                    
                </div>
        )
    }
}

export default SearchableMovieReviewsContainer;
