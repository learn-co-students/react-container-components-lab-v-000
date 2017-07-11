import React from 'react'

let Review = (review) => {
  return <div className="review" >
    <h1> {review.display_title} </h1>
  </div>
}


  let MovieReviews = ({reviews}) => {
    return <div className="review-list">
      {reviews.map((review, index) => <Review key={index} display_title={review.display_title} /> )}
    </div>
  }

export {MovieReviews}
