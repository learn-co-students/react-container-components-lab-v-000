import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class  SearchableMovieReviewsContainer extends Component {


  constructor() {
    super()

    this.state = {
      latest: ""
    }
  }

  render(){
    return(
      <div>
      </div>
    )
  }

  // componentDidMount() {
  //     fetch(URL)
  //       .then(response => response.json())
  //       .then(data => {
  //         this.setState({
  //           latest: data
  //         })
  //       })
  //   }

}

export default SearchableMovieReviewsContainer
