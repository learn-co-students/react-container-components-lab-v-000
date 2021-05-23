import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const NYT_API_KEY = 'AA1XGASlzAvaZ8FTD4M691VSURAujm1G'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component{
    state={
        reviews:[]
    }
    componentDidMount(){
        fetch(URL)
        .then(resp=>resp.json())
        .then(json=> this.setState(
            {
                reviews: json.results
            }
        ))
    }
    render (){
        return(
            <div className="latest-movie-reviews" >
                <h1>-Latest Movie Reviews</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
export default LatestMovieReviewsContainer;
