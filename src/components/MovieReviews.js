import React from 'react'

const MovieReview = ({reviews}) => {

  return (

    <div className="review-list" class="review-list">
      <ol>
        { reviews.map(review => <li className="review" class="review">{review}</li>) }
      </ol>
    </div>
  )

}

export default MovieReview
