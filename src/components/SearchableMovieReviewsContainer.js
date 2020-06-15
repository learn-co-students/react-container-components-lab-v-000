import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	reviews:[]
        }
    }

    ComponentDidMount() {
    	fetch('URL'+'query={props.query}')
    	.then(resp => resp.jason())
    	.then(data => this.setState({reviews: data.reviews}))
    	.catch(err => console.log(err))
    }

    render() {
        return (
            <MovieReviews moviereviews={this.state.reviews}/>
        );
    }
}

export default SearchableMovieReviewsContainer;


