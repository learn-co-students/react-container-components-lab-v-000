import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2uVHaGLBgypiYcHKMy2s9T6maKsRbCeZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
    state = {
    reviews: []
    }
    
    componentDidMount() {
        fetch(`${URL}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({ reviews: data.results })
            })
    }
    
    render() {
        return (
            <div className='latest-movie-reviews'>
                <h2>Latest Reviews</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;