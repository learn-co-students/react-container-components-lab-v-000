import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className={'review-list'} >
      {props.reviews ? props.reviews.map((review, index) => <p key={index} className={'review'}>Short Review: {review.summary_short}</p>) : 'blank'}
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews