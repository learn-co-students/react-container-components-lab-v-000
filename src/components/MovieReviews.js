import React from 'react';

const MovieReviews = (props) => {

  MovieReviews.defaultProps = {reviews: []}

  return (
    <div className="review-list">
        {props.reviews.map(review => (
          <div className="review">
            <h3>review.headline</h3>
            <h4><em>review.byline</em></h4>
            <p>review.summary_short</p>
          </div>
        ))}
    </div>
  )

}

export default MovieReviews
