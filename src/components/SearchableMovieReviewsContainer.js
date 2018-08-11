import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super();
        this.state={
            searchTerm:"",
            reviews: [],
        }
    }
    
    performSearch=(event)=>{
        event.preventDefault()
        console.log(event.target)
        const searchTerm=event.target
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=")
            .then(response=>response.json())
            .then(res=>{
                this.setState={
                    reviews: res.results,
                }
            })
    }
    
    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.performSearch}>
                    <input type="text" name="query"/>
                    <input type="submit" value="Search"/>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>    
        );
    }
    
}