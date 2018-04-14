import React, { Component } from 'react';

const Review = ({ headline, display_title }) => (
  <div className="review" key={headline} >
    <small>
      {headline}
    </small>
  </div>
)


const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;