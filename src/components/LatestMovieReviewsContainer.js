import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class  LatestMovieReviewsContainer extends Component {


  constructor() {
    super()

    this.state = {
      films: []
    }
  }


  render(){
    return(
      <div>
        <MovieReviews />
         />
      </div>
    )
  }

  getLatestArticles = () => {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
                + `api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ`)
     .then(res => res.json())
     .then((data) => {
       debugger
       this.setState({ films: data.results })
     })

  }

  componentDidMount() {

    this.getLatestArticles()



    }

}

export default LatestMovieReviewsContainer
