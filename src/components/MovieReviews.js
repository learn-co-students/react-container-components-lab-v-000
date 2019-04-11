// Code MovieReviews Here




import React from 'react'
 
const MovieReviews = props => {
  return (
    <div className="review-list"> Hello from MovieReviews 
        {props.reviews.map((review, index) => 
            <div className="Card" key={index}> 
                <h3>{ review.title }</h3>
                <p>{ review.summary }</p>
                <a href={review.link}>{review.cta}</a>
            </div>)}
    </div>
  )
}
 
export default MovieReviews
