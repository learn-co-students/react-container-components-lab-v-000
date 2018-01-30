import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

const NYT_API_KEY = 'a07eda94110445d7a1f9bc2690903b97';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL).then(response => 
            response.json()
        ).then(response =>
            this.setState({
                reviews: response.results
            })
        )
    }
    
    render(){
        return (
            <div className="latest-movie-reviews">
                <h1>Latest Movie Reviews:</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


}

export default LatestMovieReviewsContainer;