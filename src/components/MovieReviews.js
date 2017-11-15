import React from 'react'

// Code MovieReviews Here

const Review = ( {headline, summary_short} ) => {
    return (
        <div className="review">
            <h3>{headline}</h3>
            <p>{summary_short}</p>
        </div>
    )
}

const MovieReviews = ({ reviews }) =>  <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
  };
  

export default MovieReviews


