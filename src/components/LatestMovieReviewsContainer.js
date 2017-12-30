import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviews extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  fetchStories = () => {
    var that = this
    fetch(URL).then(response => {
        return response.json();
      }).then( (response)=>{
        that.setState({
          reviews: response.results
        })
        debugger
      })
  };

  componentWillMount(){
    this.fetchStories()
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}  />
      </div>
    );
  }
}

export default LatestMovieReviews