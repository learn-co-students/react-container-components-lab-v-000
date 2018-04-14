import React, { Component } from 'react';

const Review = ({ headline, display_title, link }) => (
  <div className="review mb-3" key={headline} >
    <small>
      {headline}
    </small>
    <br/>
    <small>
      <a href={link.url}>{link.suggested_link_text}</a>
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