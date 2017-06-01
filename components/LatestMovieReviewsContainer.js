import React from 'react';
import MovieReviews from './MovieReviews'
const APIURL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=d4e40bf6017149eca2e9506a1f5d3975`
const { fetch } = require('whatwg-fetch')

class LatestMovieReviewsContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			reviews: []
		};
	}
  componentWillMount(){
    fetch(APIURL)
    .then(response => {return response.json()})
    .then(response => {return response.results})
    .then(response => {
      this.setState({reviews: response})
    })
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