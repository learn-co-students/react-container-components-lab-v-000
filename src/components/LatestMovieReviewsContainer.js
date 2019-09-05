import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

     componentDidMount() {
        fetch(URL)
          .then(resp => resp.json())
          .then(data => this.setState({reviews: data.results}))
    }
    render(){
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
                <p>Film Reviews</p>
            </div>
        )
    }
}
export default LatestMovieReviewsContainer;
