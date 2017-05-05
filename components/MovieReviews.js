import React from 'react'

const MovieReviews = ({reviews}) => {

    return(
      <div className="review-list">
        {
            reviews.map((reviw, index)=>(
              <div className="review" key={index}>Review</div>
            ))
        }
      </div>
    )
}

MovieReviews.defaultProps={
  reviews: ['Test']
}
module.exports = MovieReviews
