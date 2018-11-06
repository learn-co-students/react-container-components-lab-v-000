import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {

  constructor() {
	    super()
	    this.state = {
	      reviews: []
	    };
	  }

    componentWillMount() {
	    fetch(URL)
	      .then(response => response.json())
	      .then(data => this.setState({ reviews: data.results }))
	  }


    render() {
      console.log(this.state.reviews)
	    return  (
        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
	  }


}

export default LatestMovieReviewsContainer
