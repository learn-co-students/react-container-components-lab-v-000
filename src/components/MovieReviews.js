// Code MovieReviews Here
import React, {Component} from 'react'

const Review=({m}) =>{
  return(
<div className='review'>
{m.display_title} - {m.byline}

</div>
)}





const MovieReviews=({reviews})=>{
  return(
    <div className='review-list'>
    {reviews.map(m=> Review({m}))}
  </div>

)}

export default MovieReviews
