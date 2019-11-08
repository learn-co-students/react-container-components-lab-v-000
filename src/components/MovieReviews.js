// Code MovieReviews Here, Presentation Component
import React, { Component } from 'react';

const MovieReviews = props => {
	console.log(props);
  
  return (
    <div className= 'review-list'>
       {props.reviews.map((review) => (<li className='review' key={this.props.searchTerm}>{review.display_title}</li>))}
    </div>
  )

}

export default MovieReviews

