// Code MovieReviews Here
import React, {Component} from 'react'

const MovieReviews = props => {
    return (
    <div className="review-list">
      {props.reviews.map(review => <div><h1 key={review.id} className="review">{review.display_title}</h1> <div>{review.summary_short}</div></div>)} 
    </div>
    )

   
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;