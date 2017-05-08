import React from 'react'; 

const MovieReviews = ({reviews}) => {
  return ( 
    <div className="review-list">
      {reviews.map(review => <li className="review">Review</li>)}
    </div>
  )
}

MovieReviews.defaultProps = {reviews: []}
export default MovieReviews; 
