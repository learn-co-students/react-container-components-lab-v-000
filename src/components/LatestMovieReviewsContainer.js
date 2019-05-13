import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    
   constructor() {
       super();

       this.state = {
           reviews: []
       };
   } 
   
   componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(response => this.setState({reviews: response.results }))
        //  aka the result we got out of the link #line 22 & 23
       }

       render() {
           
           return (
               <div className="latest-movie-reviews">
                <h2>The Lastest Reviews:</h2>
                
                <MovieReviews reviews={this.state.reviews}/>
                
               </div>
            // Note to self, reviews is now available all through out the app. 
           )
           
        }
}

export default LatestMovieReviewsContainer

   