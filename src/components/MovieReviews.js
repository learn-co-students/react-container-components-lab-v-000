import React from 'react';


const MovieReviews = ({reviews}) => {
  
  const reviewList = reviews.map(review => { 
    return (
      <div className="review" key={review.headline}>
        <a href={review.link.url}><h3>{review.headline}</h3></a> 
        <p>{review.summary_short}</p> 
      </div>
    )

  })

  return (
  <div className="review-list">
    {reviewList}
  </div>
  )
}

export default MovieReviews;