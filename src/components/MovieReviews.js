import React from 'react';
// Code MovieReviews Here

const MovieReviews = ({reviews}) => {
    return (
  
      reviews.map(review => {
        return (
        <div className="review">
          <p><a className="review-link" href={review.link.url}>{review.headline}</a></p>
          <p>By {review.byline}</p>
          {console.log(review)}
          <blockquote>{review.summary_short}</blockquote>
        </div>
        )
      })
    )

}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
