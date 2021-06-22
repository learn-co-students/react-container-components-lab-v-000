import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { render } from 'enzyme';

const NYT_API_KEY = '8ZQNa4f2Wn0pi7TydyxTFiusUj69sPtM';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    state = {movieList: []}

    componentDidMount(){
        fetch(URL)
            .then(resp => resp.json())
            .then(response => this.setState({movieList: response.results}))
    }

    render() {
        return(
            <div className='latest-movie-reviews'>
            <h2>latest movies!</h2>
            <MovieReviews reviews={this.state.movieList} />
            </div>
        )
    }
}
export default LatestMovieReviewsContainer