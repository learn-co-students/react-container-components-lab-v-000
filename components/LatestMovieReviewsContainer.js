import React from 'react';
const { fetch } = require('whatwg-fetch');
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '955d636728d04cc4bac1eb955d059da8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

export default class LastestMovieReviewsContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            reviews: []
        };
    }

    componentWillMount() {
        fetch(URL)
            .then(res => res.json())
            .then(response => this.setState({ reviews: response.results }));
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}