import React from 'react'

const MovieReviews = ({reviews}) => {
   
   return (
     <div className="review-list">
       <ul>
        {reviews.map((review, idx) => <div className="review" key={idx}><li>{review.display_title}</li></div>)}
       </ul>
     </div>
   )
}

export default MovieReviews 
