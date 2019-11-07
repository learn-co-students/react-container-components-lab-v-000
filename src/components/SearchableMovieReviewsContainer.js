//containter component
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearcheableMovieReviewsContainer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {reviews: '',
                  searchTerm: ''
        };
     }
	
   render() {
   	return (
	<div className= "searchable-movie-reviews">
	  {this.state.reviews.map((review) => <h1>{review}</h1>)}
	</div>
	)
   }

   componentDidMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}')
      .then(res => res.json())
      .then(({data}) => this.setState({ reviews: data }))
  }

}

export default SearcheableMovieReviewsContainer;