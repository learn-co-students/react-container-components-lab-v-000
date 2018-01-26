// Code MovieReviews Here

import React from 'react';

const Review = ({
    headline,
    byline,
    link,
    summary_short
}) => {
    return (
        <div className="review">
            <h1><a href={link.url}>{headline}</a></h1>
            <h3>{byline}</h3>
            <p>{summary_short}</p>
        </div>
    )
}

const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {reviews.map(Review)}
    </div>
)

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;