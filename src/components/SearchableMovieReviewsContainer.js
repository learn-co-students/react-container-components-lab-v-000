// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews';

 export default class SearchableMovieReviewsContainer extends React.Component{

constructor(props){
  super(props);
  this.state ={reviews: [],
  searchTerm: ''}
}

render()
{
  return(
    <div className="searchable-movie-reviews">
    <MovieReviews reviews={this.state.reviews} />
    </div>
  );
}
}
