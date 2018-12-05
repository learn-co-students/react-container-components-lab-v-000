// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => 
    <ul className='review-list'>
        {reviews.map(review => {
            return <li key={review.headline} className='review'>{review.display_title}-{review.byline}-{review.summary_short}</li>
        })}
        
    </ul>

export default MovieReviews