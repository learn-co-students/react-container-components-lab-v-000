import React from 'react';

const MovieReviews = ({reviews}) => {
  // return (
  //   <div className="review-list">
  //     {reviews}
  //   </div>
  // )
  return (
    <div className="review-list">
      { reviews.map(review => 
      <ul>
        <li>display_title={review.display_title}</li>
        <li>critics_pick={review.critics_pick}</li>
        <li>summary_short={review.summary_short}</li>
      </ul>  
        )}
    </div>
  );
};

export default MovieReviews;
