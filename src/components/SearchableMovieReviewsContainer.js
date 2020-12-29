import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
// if you start with the function that the test is failing,
// and then attempt to trace that back to a point where it works...
// or something similar works, then it'll be easier to isolate
// where the problem is and go from there
//
// ut you don't need the constructor
// User avatar
// Adam Weissman 9 MINUTES AGO
// state = {
//     searchTerm: '',
//     reviews: []
//   };
// User avatar
// Adam Weissman 8 MINUTES AGO
// also, you don't need to use super() since you're already extending from the React Component
// Jad Abdallah 8 MINUTES AGO
// hmm ok thanks i'll think about it
// User avatar
// Jad Abdallah 8 MINUTES AGO
// ah ok
// User avatar
// User avatar
// Adam Weissman 8 MINUTES AGO
// that'd really be if you were setting stuff up with the constructor
// User avatar
// Adam Weissman 7 MINUTES AGO
// like if you were duplicating a bunch of stuff (sorta overwriting) but you still needed stuff from "above"
// Jad Abdallah 6 MINUTES AGO
// oh right it's kind of like an inheritance thing

class SearchableMovieReviewsContainer extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     reviews: [],
  //     searchTerm: ''
  //   }
  // }

      state = {
      searchTerm: '',
      reviews: []
    };


     handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }


     handleSubmit = (event) => {
      event.preventDefault();
      fetch(URL + this.state.searchTerm)
      console.log("vthis.state.searchTerm..............", this.state.searchTerm)
        .then(res => res.json())
        .then(data =>
          // console.log("Data", data)
          console.log("Data")

          // console.log("Data.results", data.results)
          // this.setState(
          //   // reviews: data.results
          // )
        )
    }

    componentDidMount(){
      fetch(URL)
        .then(res => res.json())
        .then(data =>
          // console.log("Data", data)
          // console.log("Data.results", data.results)
            this.setState(
              reviews: data.results
            )
        )
    }


    render() {
      return(
        <div>
          1 hi from SearchableMovieReviewsContainer
          <form onSubmit={this.onSubmit}>
            <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleChange } />
            <input type="submit" value="submit your search term" />
          </form>
          <MovieReviews reviews={this.state.reviews} />
          {this.state.searchTerm}
        </div>
      )
    }


}

export default SearchableMovieReviewsContainer;

//
//
//
// Data {
//   status: 'OK',
//   copyright: 'Copyright (c) 2020 The New York Times Company. All Rights Reserved.',
//   has_more: true,
//   num_results: 20,
//   results: [
//     {
//       display_title: 'Soul',
//       mpaa_rating: 'PG',
//       critics_pick: 1,
//       byline: 'A.O. Scott',
//       headline: '‘Soul’ Review: Pixar’s New Feature Gets Musical, and Metaphysical',
//       summary_short: 'This inventive tale stars Jamie Foxx as a jazz musician caught in a world that human souls pass through on their way into and out of life.',
//       publication_date: '2020-12-24',
//       opening_date: '2020-12-25',
//       date_updated: '2020-12-24 14:04:02',
//       link: [Object],
//       multimedia: [Object]
//     },
//     {
//       display_title: 'Dear Comrades',
//       mpaa_rating: '',
//       critics_pick: 1,
//
