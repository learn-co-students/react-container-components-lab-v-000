import React from 'react'

const ReviewCard = function({review}){

  return (
    <div className="ReviewCard">
      <img height="100px" width="100px" src={review.multimedia.src} alt={""}/>
      <p>{review.headline}</p>
    </div>
  )
}
export default ReviewCard
