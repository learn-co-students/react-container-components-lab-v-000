// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) =>
    <ul className="review-list">
        {props.reviews.map(review => 
            <li className="review" key={review.display_title}>{review.display_title}</li>
        )}    
    </ul>

export default MovieReviews