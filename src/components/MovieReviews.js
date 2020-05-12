// Code MovieReviews Here

import React from 'react'

const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {reviews.map((review, index) => <li className="review" key={index}>{review.display_title}</li>)}
    </div>
)

export default MovieReviews