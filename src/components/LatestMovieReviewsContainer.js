import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'alu5ePQpLVyFHfZoVGEbMfqQ5gVJWQn1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            reviews:[]
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(res =>res.json())
        // .then(response => this.setState({reviews: response.results}, () => console.log(this.state.reviews)))
         .then(response => this.setState({reviews: response.results}))
        .catch(err=> console.log("Error"))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;