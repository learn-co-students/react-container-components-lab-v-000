import React, { Component } from 'react';
 
const Review = ({ display_title, headline, summary_short, src  }) => {
  return (
    <div className="review">
      <h4>{display_title}</h4>
      <h5>{headline}</h5>
      <h5>{summary_short}</h5>
      <img src={src}/>
      <hr />
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;
   
MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;