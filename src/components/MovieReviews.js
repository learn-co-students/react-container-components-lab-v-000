// Code MovieReviews Here
import React from 'react'
const MovieReviews = ({reviews})=>(
    <div className="review-list">
        {reviews.map((review,idx)=>{
            return (
            <div className="review" key={idx}>
                <h3>{review.display_title}</h3>
                <p>{review.summary_short}</p>
            </div>
            )
        })}
        
    </div>
)
export default MovieReviews;
