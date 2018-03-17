import React, { Component } from "react"
import "isomorphic-fetch"
import MovieReviews from "./MovieReviews.js"
const NYT_API_KEY = "f98593a095b44546bf4073744b540da0"
const MY_API_KEY = "587df9e7181d47f4b35983674c499774"
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    console.log("before fetch")
    fetch(URL)
      .then(response =>
        console.log("in here")
        return response.json()
      )
      .then(res => {
        this.setState({ reviews: res.results })
      })
  }

  render() {
    return <h1 className="latest-movie-reviews">this.state.reviews</h1>
  }
}

export default LatestMovieReviewsContainer
