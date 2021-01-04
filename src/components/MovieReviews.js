// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = props => {
  return <div className="review-list">
    <ul>
      { props.reviews.map((review) =>
        <li><strong>{ review.display_title }</strong> by { review.byline } -- link: <a href={ review.link.url }>{ review.link.url }</a></li>
      )}
    </ul>

  </div>
}

export default MovieReviews;