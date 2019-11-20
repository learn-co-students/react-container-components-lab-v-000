// Code MovieReviews Here, Presentation Component
import React from 'react';

const MovieReviews = props => {

  var reviews = Array.from(props.reviews);
  
  return (
    <div className= 'review-list'> 
    <h1>Search Results</h1>  
       {reviews.map((review) => (<li className='review' key={review.link.url}>{review.display_title}</li>))}<br/>
    </div>
  )

}

export default MovieReviews

