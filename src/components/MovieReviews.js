import React from 'react';


const showReview =({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div key={headline} className="review">
     <p>{headline}</p>
    </div>
  );
}





const MovieReviews = ({reviews}) => {
  return <div className="review-list">
  {reviews.map(showReview)}
  </div>
};

MovieReviews.defaultProps = {
  reviews: []
}



export default MovieReviews;
