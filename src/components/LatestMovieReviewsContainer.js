import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'; // f98593a095b44546bf4073744b540da0 53d9c090175e4f329d4aad0f92b6ed45
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: []
        }
    } 

    componentDidMount = () => {
        fetch(URL).then(resp => resp.json()).then(json => this.setState({reviews: json.results}));
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h3>Latest Movie Reviews</h3>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
