import React from 'react'

const details = ({headline}) => {
  return (
    <div className="review" key={headline}>
      <h5>{headline}</h5>

    </div>
  )
}


const MovieReviews = ({reviews}) =>{
  return (
    <div className="review-list">
    {reviews.map(details)}
    </div>
  )

}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
