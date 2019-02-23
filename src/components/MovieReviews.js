// Code MovieReviews Here
import React from 'react'

const Review = ({display_title, summary_short, headline}) =>{
  return(
      <div className='review'>
        <h2>{display_title}</h2>
        <h4>{headline}</h4>
        <p>{summary_short}</p>
      </div>
  )
}

const MovieReviews = ({reviews}) =>{
  // debugger
  return(
    <div className='review-list'>
      {reviews.map(Review)}
    </div>
  )

}

export default MovieReviews
