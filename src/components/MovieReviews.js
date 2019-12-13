import React from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className="review-list">
            {reviews.map((review, key) => {
                return (
                    <div className="review">
                        {review.display_title}
                    </div>
                )
            })}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;