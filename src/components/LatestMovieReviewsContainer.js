import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'pgo9sXSBs4LprdgUU33XnDLqACTn62IA';

const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?`
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
      };

    fetchReviews = () => {
        fetch(URL)
        .then(response => response.json())
        .then((data) => {
        this.setState ({reviews: data.results.map(review => (
            {
                title: review.display_title,
                summary: review.summary_short,
                link: review.link.url,
                cta: review.link.suggested_link_text
            })) 
            })
        })
    }

    componentDidMount() {
        this.fetchReviews()
      }

    render() {
        return (
            <div className="latest-movie-reviews"> 
                Hello from LatestMovieReviewsContainer
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
      }

}
export default LatestMovieReviewsContainer