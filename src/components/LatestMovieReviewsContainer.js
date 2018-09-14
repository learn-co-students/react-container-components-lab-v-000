import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
        + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
        state = {reviews: []  };

        componentDidMount() {
            fetch(URL)
                .then(results => results.json())
                .then(reviews => {
                    let reviewsWithId = reviews.results.map((review, i) => {
                        return  {...review, id: i}
                    })
                    this.setState({reviews: reviewsWithId})
                })
            
    }

    listMovieReviews(){
        return this.state.reviews.map(movie => {
            return (
                
                    <div className="review" key={movie.id}>
                            <h3>{movie.display_title}</h3> 
                            {movie.summary_short}
                     </div>
                
                )
            })
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                <h1>Latest Movie Reviews</h1>
                <hr/>
                <MovieReviews returnedMovieReviews={this.listMovieReviews()} />
            </div>
            );
    }
}

export default LatestMovieReviewsContainer;