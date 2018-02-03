import React from 'react';

function MovieReviews(props) {
  return (
    <div className='review-list'>
      {props.reviews.map((review, index) => {
        return(
          <div key={index} className='review'>
            {JSON.stringify(review)}
          </div>
        )
      })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: ["Loading"]
}

export default MovieReviews;
