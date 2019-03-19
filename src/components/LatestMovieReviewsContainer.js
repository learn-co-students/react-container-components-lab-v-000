import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'fffi6lmC9Bp1utivIEMxQGoueJLPVaAmtq0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }
  componentDidMount() {
    fetch(URL)
      .then(reslt => reslt.json())
      .then(jsndata => this.setState({reviews: jsndata.results}))
  }
  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
