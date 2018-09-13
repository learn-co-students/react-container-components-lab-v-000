import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className={'review-list'} >
      {props.reviews && props.reviews.length > 0 ? props.reviews.map((review, index) => <article key={index} className={'review'}><h3>{review.headline}</h3> {review.summary_short}</article>) : ''}
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews