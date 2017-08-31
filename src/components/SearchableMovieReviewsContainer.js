// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  componentWillMount = () => {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + this.state.searchTerm + `api-key=63f9c23196db472c9a65917707d19670`)
      .then(res => res.json())
      .then(resp => this.setState({ reviews: resp.results  }))
  }

  render(){
    return(<div className='searchable-movie-reviews'><MovieReviews reviews={this.state.reviews} /></div>)
  }
}


export default SearchableMovieReviewsContainer;
