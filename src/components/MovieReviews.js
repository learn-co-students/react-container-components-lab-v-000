import React from 'react'

const Review = ({ displayTitle, summary, img }) => (
    <div className="review">
      <img src={ img } alt={`this shows the movie ${displayTitle}`}/>
      <h3>{displayTitle}</h3>
      <p>{ summary }</p>
    </div>
  )
   
   
  const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      { reviews.map(Review) }
    </div>
  )

  MovieReviews.defaultProps ={
      reviews: []
  }
  
export default MovieReviews;