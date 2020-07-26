// Code MovieReviews Here
import React from 'react'

function displayReview(review) {
    return(
        <div key={review.headline} className='review'>
            <header>{review.headline}</header>
            <h5>{review.byline}</h5>
            <p>{review.summary_short}</p>
            <a href={review.link.url}>{review.link.suggested_link_text}</a>
        </div>
    )
}

const MovieReviews = ({reviews}) => {
    return(
        <div className='review-list'>
            {reviews.map(review => displayReview(review))}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}


export default MovieReviews;