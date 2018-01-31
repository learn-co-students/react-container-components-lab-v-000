import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'eb7bccfc45bb46d7a1671aaf80e279ac';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
            https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=eb7bccfc45bb46d7a1671aaf80e279ac
class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super();
     
        this.state = {
          reviews: []
        };
    }

    componentDidMount() {
        fetch(URL).then(response => {
            debugger
            response.json()})
          .then((reviews => this.setState({ reviews })));
      }

    render() {
        return (
          <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}


export default LatestMovieReviewsContainer;