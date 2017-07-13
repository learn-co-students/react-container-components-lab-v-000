import React from 'react'



let Review = (review) => {
  return <div className='review'>
    <h1> {review.display_title} </h1>
  </div>
}


let MovieReviews = ({reviews}) => {
    return <div className="review-list">
      {reviews.map((review, index) => <Review key={index} className='review' display_title={review.display_title}  /> )}
    </div>
    }

    MovieReviews.defaultProps = {
      reviews: [{display_title: "bar"}]
    }


export default MovieReviews
