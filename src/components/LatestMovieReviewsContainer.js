import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

//import 'isomorphic-fetch';

const NYT_API_KEY = 'c9ce25591f8349ba9f03068ade15038d';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
+ `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            reviews: []
        }
    }
    componentWillMount() {
        this.getLatestMovieReviews();
    }
    getLatestMovieReviews = () => {
        fetch(URL)
            .then( response => {
            return response.json()
        })
            .then( result => {
            this.setState({
                reviews: result.results
            })
        })
    }

    render () {

        return (

            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer