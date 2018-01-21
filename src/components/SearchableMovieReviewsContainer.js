import React from 'react';
import MoviewReviews from './MovieReviews';

export default class SearchableMoviewReviewsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <MoviewReviews reviews = {this.state.reviews} />
      </div>
    )
  }
}
