import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;




// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

  constructor(props) {
      super(props);

      this.state = {
          reviews: []
      };

      this.movieReviews = this.movieReviews.bind(this);
  }


 movieReviews = () =>{
    fetch(URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
      this.setState({
        reviews: data.results
      });
    });
  }

  componentDidMount(){
    this.movieReviews()
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <h1>Latest REviews</h1>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    )}
}

export default LatestMovieReviewsContainer;
