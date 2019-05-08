import React from 'react'

const ReviewCard = function({review}){
  return (
    <div className="ReviewCard">
      <img height="100px" width="100px" src={review.link.url}/>
    </div>
  )
}
export default ReviewCard
