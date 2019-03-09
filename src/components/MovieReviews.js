// Code MovieReviews Here
import React from 'react'

const Review = ({display_title, headline, summary_short}) => {
    return (
        <div key={headline} className="review">
            <h2>{display_title}</h2>
            <div>{summary_short}</div>
        </div>
    )
}

const MovieReviews = ({reviews}) => {
    return (
    <div className="review-list">
        {reviews.map(Review)}
    </div>
    )
}

export default MovieReviews;