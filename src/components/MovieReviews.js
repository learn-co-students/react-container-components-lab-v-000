import React from 'react'

const Review = ({ headline, link, summary_short }) => {
    return (
        <div className="review">
            <h3>{headline}</h3>
            <a href={link.url}>Link</a>
            <p>Summary: {summary_short}</p>
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

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;