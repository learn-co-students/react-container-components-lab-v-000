
import React from 'react';

const MovieReviews = ({ reviews }) => {
    return <div className="review-list">
        {reviews.map(renderReview)}
        </div>
    };

    MovieReviews.defaultProps = {
    reviews: []
};


const renderReview = ({
  headline,
  byline,
  link,
  summary_short}) => {
  return (
    <div className="review">
    </div>
  );
};


export default MovieReviews;