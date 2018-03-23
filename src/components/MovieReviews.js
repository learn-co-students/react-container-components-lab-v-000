// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
    <ul className="review-list">
        {reviews.map((review, i) => <li key={i} className="review"><b>{review.display_title}</b><br/>{review.summary_short}</li>)}
    </ul>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;

