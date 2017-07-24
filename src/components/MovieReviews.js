// Code MovieReviews Here
import React from 'react';

const Review = ({title, author, summary}) => {
  return (
    <div className="review">
      <h3>{title}</h3>
      <p>By {author}</p>
      <p>{summary}</p>
    </div>
  )
}



const MovieReviews = ({reviews}) => {
    return(
      <div className="review-list">
       {reviews.map(Review)}
     </div>
   );
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
