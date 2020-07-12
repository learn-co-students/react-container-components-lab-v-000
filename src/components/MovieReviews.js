// Code MovieReviews Here
import React from 'react'

//outputs a top-level element with the class review-list 
//and that each review is wrapped by an element with class review


function displayReview(review){
    //console.log(review)
    return(
        <div className="review">
            <header>{review.headline}</header>
            <a href={review.link}>{review.critics_pick}</a>
        </div>
    )
}

const MovieReviews = ({reviews}) => {

  
  return (
  <div className="review-list">{reviews.map(review => displayReview(review))}</div>
  )
}
 
export default MovieReviews