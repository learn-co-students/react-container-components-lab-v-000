import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const NYT_API_KEY = 'AA1XGASlzAvaZ8FTD4M691VSURAujm1G'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
const KEY ='api-key='+NYT_API_KEY
const Q= '&query='
            
// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
    state={
        reviews:[],
        searchTerm: ""
    }

    handleClick=(event)=>this.setState({[event.target.name]: event.target.value})
    handleSubmit=(event)=>{
        event.preventDefault();
        fetch(URL+KEY+Q+this.state.searchTerm)
        .then(resp=>resp.json())
         .then(json=> this.setState(
            {
                reviews: json.results
            })
        )
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input name="searchTerm" onChange={this.handleClick} />
                    <button>Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            
            </div>
        )
    }

}
export default SearchableMovieReviewsContainer;
