import React from 'react';

// const Review = ({ review }) => {
//   return (
//     <div className="review">
//       <h4>{review.display_title}</h4>
//       <p><strong>{review.byline}</strong></p>
//       <p>{review.summary_short}</p>
//     </div>
//   )
// }

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => {
        return (
          <div className="review">
            <h4>{review.display_title}</h4>
            <p><strong>{review.byline}</strong></p>
            <p>{review.summary_short}</p>
          </div>
        )
      })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
