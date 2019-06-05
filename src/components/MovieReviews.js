// Code MovieReviews Here
import React from "react";

const MovieReviews = props => {
  // return needs work
  // console.log(props.reviews);

  return (
    <div className='review-list'>{
      props.reviews && props.reviews.map(review => {
        return <div key={review.display_title} className="review">{review.display_title}</div>;
      })}</div>
  );
};
export default MovieReviews;
